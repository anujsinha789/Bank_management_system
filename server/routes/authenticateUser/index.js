const express = require("express");
const router = express.Router();
const multer = require("multer")();
const data = require("./index.json");

router.post("/", multer.none(), function (req, res, next) {
  console.log(req.body);
  const { emailId, password } = req.body;

  const isValidUser = emailId === "demo@gmail.com" && password === "demo";
  res.set("Access-Control-Allow-Origin", "*");
  res.send({
    username: "Demo@123",
    userId: "demo@gmail.com",
    userRole: "admin",
    isAuthenticated: isValidUser,
  });
});

module.exports = router;
