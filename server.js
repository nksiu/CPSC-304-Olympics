const config = require("./dbconfig/config");
const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json);

const db = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DB,
  port: 3306
})

db.connect((err) => {
  console.log("hit here")
  if (err) {
    throw err;
  }
  console.log("MySQL connected");
});

// app.get("/createdb", (req, res) => {
//   let sql = `CREATE DATABASE ${config.DB}`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Database created...")
//   })
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
