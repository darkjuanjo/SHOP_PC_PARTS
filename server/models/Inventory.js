const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const InventorySchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      maxlength: 280
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
      maxlength: 280
    },
    stock: {
      type: Number,
      required: true
    },
    image:{
      type:String
    },  
    AddedAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);
const Inventory = model('Inventory', InventorySchema);
module.exports = Inventory;