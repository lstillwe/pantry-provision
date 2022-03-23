const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  threshold: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Item = model("Item", itemSchema);

module.exports = Item;