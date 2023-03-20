var express = require("express");
const mongoose = require("mongoose");
const userSchema = require("../Model/user_model");
const { getDb } = require("../utils/db");
var router = express.Router();

const Customer = mongoose.model("customers", userSchema);
/* GET home page. */
// router.get("/", async function (req, res, next) {
//   const result = await getDb.collection("customers").find().toArray();
//   res.render("index", { users: result });
// });

router.get("/", async function (req, res, next) {
  try {
    const users = await Customer.find({});
    // res.status(200).json(user);
    res.render("index", { users: users });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
});

module.exports = router;
