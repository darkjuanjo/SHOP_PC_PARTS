const { AuthenticationError } = require('apollo-server-express');
const { User, Inventory, Product, Order } = require('../models');
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
      // return user;
    },
    items: async (parent, { category }) => {
      const params = category ? { category } : {};
      return Inventory.find(params).sort({ AddedAt: -1 });
    },
    item: async (parent, { name }) => {
      return Inventory.findOne({ name });
    },
    getOrders: async (parent, { orders }, context) => {
      //get order objects
      const order_array = [];
      const products_array = [];
      const items_array = [];
      //get orders
      for (let i = 0; i < orders.length; i++) {
        const object = await Order.findOne({ '_id': orders[i] });
        order_array.push(object);
      }
      for (let i = 0; i < order_array.length; i++) {
        const temp = [];
        for (let ii = 0; ii < order_array[i].products.length; ii++) {
          const item_id = await Product.findOne({ '_id': order_array[i].products[ii] });
          const item = await Inventory.findOne({ '_id': item_id.product });

          temp.push({
            _id: item._id,
            name: item.name,
            price: item.price,
            category: item.category,
            description: item.description,
            image: item.image,
            qty_bought: item_id.qty
          });
        }
        const order = {
          order_id: order_array[i]._id,
          products: temp,
          order_cost: order_array[i].OrderCost
        }
        products_array.push(order);
      }
      return products_array;
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      console.log(user);
      console.log(token);
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
    add_to_Inventory: async (parent, args, context) => {
      if (context.user.username === 'admin') {
        const item = await Inventory.create(args);
        console.log('Your item is: ' + item);
        return item;
      }
      return {}
    },
    delete_from_Inventory: async (parent, { name }, context) => {
      if (context.user.username === 'admin') {
        const item = await Inventory.deleteOne({ name: name });
        return item;
      }
      return {}
    },
    addOrder: async (parent, { product, cost }, context) => {
      if (context.user) {
        ids = [];
        const products = await Product.insertMany(product);
        products.forEach(product => ids.push(product._id));

        const order = await Order.create({ products: products, OrderCost: cost });
        return await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { orders: order._id } },
          { new: true }
        );
      }
    },
    editUser: async (parent, { input, username }, context) => {
      if (context.user) {
        const user = username === undefined || username === "" ? context.user.username : username;
        return await User.findOneAndUpdate({ username: user }, input, { new: true });
      }
    },
    deleteUser: async (parent, { username }, context) => {
      if (context.user) {
        const removed_user = await User.deleteOne({ username: username });
        console.log(removed_user);
        if (removed_user.deletedCount) {
          return `User: ${username} deleted successfully!`
        }
        else
          return `Error Unable to delete ${username}`

      }
    }
  }
};

module.exports = resolvers;
