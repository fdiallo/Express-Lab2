
// Dependencies
const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT


// Middlewares




// Routes
app.get("/api/fun-fact", (req, res) => {
    res.send("This route will be responsible for fetching the data and sending it to the client.")
})




// Port
app.listen(PORT, () => {
    console.log(`Server is listening to PORT: ${PORT}`)
})