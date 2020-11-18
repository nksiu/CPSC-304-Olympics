const express = require("express");
const app = express();
const db = require('./dbconfig/db')

app.use(express.json());

// Routes
app.use("/api/olympics", require("./routes/api/olympics"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
