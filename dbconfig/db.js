const mysql = require("mysql");
const config = require("./config");

const db = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DB,
  port: 3306,
  insecureAuth: true,
  multipleStatements: true
})

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected");
});

module.exports = db;