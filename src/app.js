const express = require("express")
const app = express()
const userDataRoutes = requie()
app.use(express.json())

app.use(express.json({limit: "16kb"}))

app.use("/api/v1/users",userDataRoutes)

module.exports = { app }