var mongoose = require("mongoose");

var orderItem = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "orders"
  },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
  quantity: {
    required: true,
    type: Number
  }
});

module.exports = orderItem;
