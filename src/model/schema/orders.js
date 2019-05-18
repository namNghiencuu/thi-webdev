var mongoose = require("mongoose");

var orders = new mongoose.Schema({
  deliveryAddress: {
    required: true,
    type: String,
    unique: true
  },
  paymentType: {
    required: true,
    type: String
  },
  date: {
    required: true,
    type: Date,
    default: new Date()
  },
  status: {
    required: true,
    type: String
  },
  status: {
    required: true,
    type: String,
    default: "Created"
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
});

module.exports = orders;
