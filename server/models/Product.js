const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const productSchema = new Schema(
  {
    product:{
      type: Schema.Types.ObjectId,
      ref: 'Inventory'
    }
    ,
    qty: {
      type: Number,
      required: true
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    }
  }
);

const Product = model('Product', productSchema);

module.exports = Product;
