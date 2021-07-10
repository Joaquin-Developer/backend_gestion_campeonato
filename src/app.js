const express = require("express")
const app = express()
const cors = require("cors")

// settings:
app.set("port", process.env.PORT || 5000)
/**
 * missing CORS config!
 */
app.use(cors({ }))

app.use(express.json()) // read json
app.use(express.urlencoded({ extended: false }))    // read html forms

// routes:
app.use("/api/matches", require("./routes/matches.routes"))
app.use("/api/teams", require("./routes/teams.routes"))
app.use("/api/series", require("./routes/series.routes"))
app.use("/api/finalround", require("./routes/finalRound.routes"))

// 404 not found requests:
app.use((request, response, next) => {
    response.status(404).send("404 not found")
});

module.exports = app