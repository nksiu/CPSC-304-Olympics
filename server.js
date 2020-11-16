const config = require("./config");
const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json);

const connection = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DB
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
