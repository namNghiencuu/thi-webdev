var mongoose = require("mongoose");

var products = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: true
  },
  description: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  },
  imageLink: {
    required: true,
    type: String
  },
  categoryid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories"
  }
});

module.exports = products;
