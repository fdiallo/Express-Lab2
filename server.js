// Dependencies
const express = require("express")
const app = express()
const axios = require("axios")
require("dotenv").config()
const PORT = process.env.PORT


// Middlewares


// Routes
app.get("/api/fun-fact", async (req, res) => {
    try {
        //res.send("This route will be responsible for fetching the data and sending it to the client.")
        const response = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random")

        // Transorm the data
        const transformedData = { fact: response.data.text }
        res.json(transformedData)
    } catch (error) {
        if (error.response) {
            console.error('API Error:', error.response.status, error.response.data);
            res.status(error.response.status).json({ message: 'Error fetching data from external API.' });
        } else {
            console.error('Network Error:', error.message);
            res.status(500).json({ message: 'A network error occurred.' });
        }
    }
})


// Port
app.listen(PORT, () => {
    console.log(`Server is listening to PORT: ${PORT}`)
})