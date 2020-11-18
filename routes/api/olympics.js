const express = require('express');
const router = express.Router();
const sql = require("../../dbconfig/db");

// @route GET api/olympics
router.get("/", (req, res) => {
  sql.query("SELECT * FROM olympics WHERE olympics.year = 2008", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  })
})

module.exports = router;