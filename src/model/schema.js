var mongoose = require("mongoose");
var schema = require("./schema/index");

module.exports = {
  users: mongoose.model("users", schema.users),
  orders: mongoose.model("orders", schema.orders),
  orderItem: mongoose.model("orderItem", schema.orderItem),
  products: mongoose.model("products", schema.products),
  categories: mongoose.model("categories", schema.categories)
};
