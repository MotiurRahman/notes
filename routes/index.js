var express = require("express");
const { getDb } = require("../utils/db");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
    const result = await getDb.collection("customer").find().toArray();
    res.render("index", { users: result });
});

module.exports = router;
