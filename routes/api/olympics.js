const express = require('express');
const router = express.Router();
const sql = require("../../dbconfig/db");

// @route GET api/olympics
router.get("/", (req, res) => {
  sql.query(`SELECT * FROM olympics WHERE olympics.year > ${req.query.year}`, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  })
})

router.get("/getOlympics", (req, res) => {
  sql.query("SELECT * FROM olympics", (err, result) => {
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

router.get("/getSport", (req, res) => {
  sql.query("SELECT * FROM sport", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  })
})

router.get("/getPlays", (req, res) => {
  sql.query("SELECT * FROM plays", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  })
})

router.delete('/deleteSport', (req,res) => {
    var query = `DELETE FROM sport WHERE SportName = '${req.body.sportName}';`
    sql.query(query, (err, result) => {
      if (err) throw err;
      console.log(result)
      res.json(result);
    })
})

router.put('/updateCountry', (req,res) => {
    var query = `UPDATE country SET NumMedals = '${req.body.medalsWon}' WHERE CountryName = '${req.body.country}'`
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

// Count the number of sports that each Athlete plays
router.get('/groupBy', (req, res)  => {
  var query = `SELECT Name, COUNT(SportName) 
  FROM plays p, athlete a
  WHERE a.AthleteID = p.AthleteID
  GROUP BY Name;`
  sql.query(query, (err, result) => {
    console.log(result);
    res.json(result);
  })
})

// -- Find the sponsors that sponsor more than $2000 for every sponsorship
router.get('/having', (req, res)  => {
  var query = `SELECT sponsorName
  FROM sponsoredby 
  GROUP BY SponsorName
  HAVING MIN(amountSponsored) > 2000`
  sql.query(query, (err, result) => {
    console.log(result);
    res.json(result);
  })
})

router.get("/getHostEvent", (req, res) => {
  sql.query("SELECT * FROM hosts_event", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  })
})

// -- For each olympic games with more than 2 events,  find the number of <Type> events
router.get('/nestedAggregation', (req, res)  => {
  var query = `SELECT Year, Count(e.Type) as numEvents
  FROM hosts_event e
  WHERE e.Type = '${req.query.type}'
  GROUP BY e.Year
  HAVING 2 < (SELECT COUNT(*)
        FROM hosts_event e2
        WHERE e.Year = e2.Year);`
  sql.query(query, (err, result) => {
    console.log(result);
    res.json(result);
  })
})

router.get("/sponsoredBy", (req, res) => {
  sql.query("SELECT Name, SponsorName, amountSponsored FROM sponsoredby sb, athlete a WHERE sb.AthleteID = a.AthleteID", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  })
})

// -- Find the athlete (Names) that receive more than <Amount> from ALL of their sponsor
router.get('/division', (req, res)  => {
  var query = `SELECT DISTINCT a.Name 
  FROM athlete a, sponsoredby sb
  WHERE a.AthleteID = sb.AthleteID AND NOT EXISTS(SELECT sb1.SponsorName
            FROM sponsoredby sb1
            WHERE a.AthleteID = sb1.AthleteID AND
                    NOT EXISTS(
                    SELECT sb2.SponsorName
                    FROM sponsoredby sb2
                    WHERE sb1.SponsorName = sb2.SponsorName AND a.AthleteID = sb2.AthleteID AND sb2.amountSponsored > '${req.query.amount}')
                    )`
  sql.query(query, (err, result) => {
    console.log(result);
    res.json(result);
  })
})

router.get('/projection', (req, res) => {
  var query = `SELECT a.AthleteID, Name, SportName, DateTime, EventName, Year FROM competes_plays cp, athlete a WHERE cp.AthleteID = a.AthleteID`;
  sql.query(query, (err, result) => {
    console.log(result);
    res.json(result);
  })
})

router.get("/getAthlete", (req, res) => {
  sql.query("SELECT * FROM athlete", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  })
})

router.get('/join', (req, res) => {
  var query = `SELECT DISTINCT Name as AthleteName FROM sponsoredby sb, athlete a WHERE sb.AthleteID = a.AthleteID AND amountSponsored > '${req.query.amount}'`;
  sql.query(query, (err, result) => {
    console.log(result);
    res.json(result);
  })
})

module.exports = router;