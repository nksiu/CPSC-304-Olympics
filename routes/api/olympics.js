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

router.get("/getCountry", (req, res) => {
  sql.query("SELECT * FROM country", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  })
})

router.post('/insertSport', (req,res) => {
  var query = `INSERT INTO country(CountryName, NumMedals) VALUES('${req.body.country}', '${req.body.medalsWon}')`
  sql.query(query, (err, result) => {
    if (err) throw err;
    console.log(result)
    res.json(result);
  })
})

router.delete('/deleteSport', (req,res) => {
    //TODO replace example with input
    var query = "DELETE FROM wintersport WHERE name = 'example'"
    sql.query(query, (err, result) => {
      if (err) throw err;
      console.log(result)
      res.json(result);
    })
})

router.put('/updateCountry', (req,res) => {
    //TODO replace example with input
    var query = "UPDATE country SET NumMedals = '10000000' WHERE CountryName = 'example'"
    sql.query(query, (err, result) => {
      if (err) throw err;
      console.log(result)
      res.json(result);
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