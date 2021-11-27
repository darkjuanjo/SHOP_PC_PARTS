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
    getOrder: async (parent, {order}, context) => {
      if(context.user) {
       return await Order.findById({ _id:order }) //find the order
       .then(response => { 
  return Product.find({ '_id':{$in: response.products}}) //this returns list of products id
        .then(items => {
          let _id = [];
          let qty = [];
          items.forEach(item => {
            _id.push(item.product);
            qty.push(item.qty);
          });
    return Inventory.find({'_id':{$in:_id}})
          .then(items => {
            const purchase_array = [];
            items.forEach((item,i) => {
              const purchase = {
                item: item,
                qty:  qty[i]
              }
              purchase_array.push(purchase);
            });
            return purchase_array;
          });      
        });
       })
      }
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
    add_to_Inventory: async (parent, args) => {
      const item = await Inventory.create(args);
      return item;
    },
    addOrder: async (parent, {product, cost}, context) => {
      if(context.user) {
        ids = [];
        const products = await Product.insertMany(product);
              products.forEach(product => ids.push(product._id));

        const order = await Order.create({products:products, OrderCost:cost});
        return await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { orders : order._id } },
          { new: true }
        );
      }
    },
  }
};

module.exports = resolvers;
