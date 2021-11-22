const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const CartSchema = new Schema(
  {
  BoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Items'
  },
  qty: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true
  }
  }
);

const purchaseSchema = new Schema(
  {
    item: [CartSchema],
    BoughtAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Purchase = model('Purchase', purchaseSchema);

module.exports = Purchase;
