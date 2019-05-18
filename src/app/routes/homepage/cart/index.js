var router = require("express").Router();
var mongoose = require("mongoose");

router.get("/cart/:id", async (req, res, next) => {
  res.render("homepageCart");
});

module.exports = router;
