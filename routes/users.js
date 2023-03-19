var express = require("express");
const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/db");
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
    const result = await getDb.collection("customer").find().toArray();
    res.json({ success: true, users: result });
});

/* GET users listing. */
router.post("/", async function (req, res, next) {
    const data = req.body;
    const result = await getDb.collection("customer").insertOne(data);
    res.send(result);
});

/* GET users listing. */
router.delete("/", async function (req, res, next) {
    const id = req.query.id;
    console.log(id);
    const result = await getDb
        .collection("customer")
        .deleteOne({ _id: new ObjectId(id) });
    return res.send({ success: true });
});

module.exports = router;
