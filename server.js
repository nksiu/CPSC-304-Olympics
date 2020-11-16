const express = require("express");
const app = express();

app.use(express.json());

// Routes
app.use("/api/athlete", require("./routes/api/athletes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
