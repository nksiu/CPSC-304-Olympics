const express = require('express');
const router = express.Router();
const sql = require("../../dbconfig/db");

// @route GET api/olympics
router.get("/", (req, res) => {
  sql.query("SELECT * FROM olympics WHERE olympics.year > 2008", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  })
})

router.post('/insertSport', (req,res) => {
  //TODO replace Gyna, 5000 with inputs
  var query = "INSERT INTO country(CountryName, NumMedals) VALUES('Gyna', '5000')"
  sql.query(query, (err, result) => {
    if (err) throw err;
    res.send('Added new wintersport');
  })
})

router.delete('/deleteSport', (req,res) => {
    //TODO replace example with input
    var query = "DELETE FROM wintersport WHERE name = 'example'"
    sql.query(query, (err, result) => {
      if (err) throw err;
      res.send('Deleted mascot and olympic due to cascading delete');
    })
})

router.put('/updateCountry', (req,res) => {
    //TODO replace example with input
    var query = "UPDATE country SET NumMedals = '10000000' WHERE CountryName = 'example'"
    sql.query(query, (err, result) => {
      if (err) throw err;
      res.send('Succesfully updated Country');
    })
})

// router.get('/project', (req, res)  => {
//   //TODO replace example with input
//   var query = "UPDATE country SET NumMedals = '10000000' WHERE CountryName = 'example'"
//   sql.query(query, (err, result) => {
//     if (err) throw err;
//     res.send('Succesfully updated Country');
//   })
// })

// router.get('/aggregate', (req, res)  => {
//   //TODO replace example with input
//   var query = "SELECT FROM 
//   sql.query(query, (err, result) => {
//     if (err) throw err;
//     res.send('Succesfully updated Country');
//   })
// })




module.exports = router;