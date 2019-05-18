var router = require("express").Router();
var mongoose = require("mongoose");

router.use("/cart", require("./cart"));
router.use("/product", require("./product"));
router.use("/user", require("./user"));

router.get("/", async (req, res, next) => {
  var products = await mongoose.model("products").find();
  res.render("homepage", {
    products: products
  });
});

module.exports = router;
