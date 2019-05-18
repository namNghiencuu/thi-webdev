var mongoose = require("mongoose");

var categories = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: true
  },
  description: {
    required: true,
    type: String
  },
  imageLink: {
    required: true,
    type: String
  }
});

module.exports = categories;
