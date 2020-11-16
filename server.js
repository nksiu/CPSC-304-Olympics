const config = require("./dbconfig/config");
const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json);

const db = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DB
})

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected");
});

const PORT = process.env.PORT || 3306;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
