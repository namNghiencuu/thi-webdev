var router = require("express").Router();
var mongoose = require("mongoose");
var express = require("express");

router.get("/", async function(req, res, next) {
  try {
    var products = await mongoose
      .model("products")
      .find({})
      .populate("categoryid")
      .exec(function(err, products) {
        res.render("adminProduct", {
          products: products
        });
        console.log(products);
      });
  } catch (err) {
    console.log(err);
  }
});
router.get("/add", async function(req, res, next) {
  try {
    res.render("addProduct");
  } catch (error) {
    console.log(error);
  }
});
router.post("/add", async function(req, res, next) {
  try {
    let content = {
      ...req.body
    };
    let products = await mongoose
      .model("products")
      .create(content, function(err) {
        if (err) throw err;
      });
    return res.redirect("/product");
  } catch (error) {
    console.log(error);
  }
});
router.put("/:id/put", async function(req, res, next) {
  let content = {
    ...req.body
  };
  let products = await mongoose.model("products").findByIdAndUpdate(content);
  return res.redirect("/product");
});
router.delete("/:id/remove", async function(req, res, next) {
  let query = await mongoose.model("products").findByIdAndDelete(req.params.id);
  return res.redirect("/product");
});

module.exports = router;
