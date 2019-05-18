var mongoose = require("mongoose");

var users = new mongoose.Schema({
  username: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  role: {
    type: String
  },
  fullname: {
    required: true,
    type: String
  },
  name: {
    required: true,
    type: String,
    unique: true
  },
  phone: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: Number
  },
  address: {
    required: true,
    type: String
  }
});

module.exports = users;
