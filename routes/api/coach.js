const express = require('express');
const router = express.Router();
const sql = require("../../dbconfig/db");

// @route GET api/coach
router.get("/", (req, res) => {
  sql.query("SELECT * FROM coach", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  })
})

module.exports = router;