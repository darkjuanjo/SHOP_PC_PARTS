const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const BoughtSchema = new Schema(
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
  }
  }
);

const purchaseSchema = new Schema(
  {
    item: [BoughtSchema],
    boughtAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
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
