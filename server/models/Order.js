const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const orderSchema = new Schema(
  {
    products:[{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
    ,
    BoughtAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    OrderCost: {
        type: Number,
        required: true
    }
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    }
  }
);

const Order = model('Order', orderSchema);

module.exports = Order;
