var router = require("express").Router();
var mongoose = require("mongoose");

router.get("/product/:id", async (req, res, next) => {
  res.render("homepageProduct");
});

module.exports = router;
