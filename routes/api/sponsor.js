const express = require('express');
const router = express.Router();
const sql = require("../../dbconfig/db");

// @route GET api/sponsor
router.get("/", (req, res) => {
  sql.query("SELECT * FROM sponsor", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  })
})

module.exports = router;