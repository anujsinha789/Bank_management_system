const express = require("express");
const router = express.Router();
const multer = require("multer")();
const data = require("./index.json");

router.get("/", multer.none(), function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  res.send({
    data,
  });
});

module.exports = router;
