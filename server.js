const express = require("express");
const app = express();

app.use(express.json());

// Routes
app.use("/api/athlete", require("./routes/api/athlete"));
app.use("/api/coaches", require("./routes/api/coaches"));
app.use("/api/coach", require("./routes/api/coach"));
app.use("/api/coach_years", require("./routes/api/coach_years"));
app.use("/api/competes_plays", require("./routes/api/competes_plays"));
app.use("/api/olympics", require("./routes/api/olympics"));
app.use("/api/participate", require("./routes/api/participate"));
app.use("/api/plays", require("./routes/api/plays"));
app.use("/api/represents_athlete", require("./routes/api/represents_athlete"));
app.use("/api/sponsor", require("./routes/api/sponsor"));
app.use("/api/sponsoredby", require("./routes/api/sponsoredby"));
app.use("/api/sport", require("./routes/api/sport"));
app.use("/api/summersport", require("./routes/api/summersport"));
app.use("/api/wintersport", require("./routes/api/wintersport"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
