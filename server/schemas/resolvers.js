const { AuthenticationError } = require('apollo-server-express');
const { User, Inventory, Purchase } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('history')

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('history')
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('history')
    },
    items: async (parent, { category }) => {
      const params = category ? { category } : {};
      return Inventory.find(params).sort({ AddedAt: -1 });
    },
    item: async (parent, { name }) => {
      return Inventory.findOne({ name });
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addItem: async (parent, args) => {
      const item = await Inventory.create(args);
      return item;
    },
    addCart: async (parent, args, context) => {
      if (context.user) {
        const item = await Items.create({ ...args, username: context.user.username });
        return item;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addPurchase: async (parent, args, context) => {
      if (context.user) {
        const purchase = await Purchase.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { history: purchase._id } },
          { new: true }
        );

        return purchase;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
