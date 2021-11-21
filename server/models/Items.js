const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ItemSchema = new Schema(
  {
    name: {
      type: String,
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
    createdAt: {
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

module.exports = ItemSchema;
