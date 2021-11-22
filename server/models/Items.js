const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ItemSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      maxlength: 280
    },
    cost: {
      type: String,
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
const Items = model('Items', ItemSchema);
module.exports = Items;
