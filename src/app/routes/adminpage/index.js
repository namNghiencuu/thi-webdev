var router = require("express").Router();
var mongoose = require("mongoose");
var express = require("express");

router.use("/category", require("./category"));
router.use("/product", require("./product"));

router.get("/", async function(req, res, next) {
  res.render("adminpage");
});

module.exports = router;
