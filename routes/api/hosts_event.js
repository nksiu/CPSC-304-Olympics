const express = require('express');
const router = express.Router();
const sql = require("../../dbconfig/db");

// @route GET api/hosts_event
router.get("/", (req, res) => {
  sql.query("SELECT * FROM hosts_event", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  })
})

module.exports = router;