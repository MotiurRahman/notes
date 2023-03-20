var express = require("express");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/db");
const userSchema = require("../Model/user_model");
var router = express.Router();

const Customer = mongoose.model("customers", userSchema);
/* GET users listing. */
// router.get("/", async function (req, res, next) {
//   const result = await getDb.collection("customers").find().toArray();
//   res.json({ success: true, users: result });
// });

router.get("/", async function (req, res, next) {
  try {
    const user = await Customer.find({});
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
});

/* GET users listing with ID */
router.get("/:id", async function (req, res, next) {
  const id = req.params.id;
  const result = await getDb
    .collection("customers")
    .findOne({ _id: new ObjectId(id) });
  return res.json(result);
});

/* POST users listing. */
router.post("/", async function (req, res, next) {
  try {
    const newCustomer = new Customer(req.body);
    // const data = req.body;
    // const result = await getDb.collection("customers").insertOne(data);
    const result = await newCustomer.save();
    res.json(result);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "data is not inserted",
      error: err.message,
    });
  }
});

// /* Update users listing. */
// router.put("/", async function (req, res, next) {
//   const id = req.query.id;
//   const data = req.body;
//   const result = await getDb
//     .collection("customers")
//     .updateOne({ _id: new ObjectId(id) }, { $set: data });
//   res.send(result);
// });

/* Update users listing. */
router.put("/", async function (req, res, next) {
  try {
    const id = req.query.id;
    const data = req.body;
    const filter = { _id: new ObjectId(id) };
    const update = data;
    // const result = await getDb.collection("customers").insertOne(data);
    const result = await Customer.update(filter, update, {
      new: true,
    });
    res.json(result);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "data is not inserted",
      error: err.message,
    });
  }
});

/* Delete users listing. */
router.delete("/", async function (req, res, next) {
  const id = req.query.id;
  console.log(id);
  const result = await getDb
    .collection("customers")
    .deleteOne({ _id: new ObjectId(id) });
  return res.send({ success: true });
});

module.exports = router;
