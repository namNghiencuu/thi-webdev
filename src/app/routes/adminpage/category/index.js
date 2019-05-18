var router = require("express").Router();
var mongoose = require("mongoose");
var express = require("express");

router.get("/", async function(req, res, next) {
  var categories = await mongoose.model("categories").find();
  res.render("adminCategories", {
    categories: categories
  });
});
router.post("/add", async function(req, res, next) {
  try {
    let content = {
      ...req.body
    };
    let category = await mongoose.model("categories").create(content, err => {
      if (err) throw err;
    });
    return res.redirect("/category");
  } catch (error) {
    console.log(error);
  }
});
router.put("/:id/put", async function(req, res, next) {
  try {
    let content = {
      ...req.body
    };
    let categories = await mongoose
      .model("categories")
      .findByIdAndUpdate(content, err => {
        if (err) throw err;
      });
    return res.redirect("/category");
  } catch (err) {
    console.log(err);
  }
});
router.delete("/:id/remove", async function(req, res, next) {
  try {
    let query = await mongoose
      .model("categories")
      .findByIdAndDelete(req.params.id, (err, res) => {
        if (err) throw err;
      });
    return res.redirect("/category");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
