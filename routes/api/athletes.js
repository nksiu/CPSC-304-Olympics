const express = require('express');
const router = express.Router();
const sql = require("../../dbconfig/db");

// @route GET api/athletes
router.get("/", (req, res) => {
  sql.query("SELECT * FROM athlete", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  })
})

module.exports = router;