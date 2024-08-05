const express = require('express');
const allroutes = require('./app');
require('dotenv').config();
const PORT = process.config.PORT | 4000;
require('./config/db');
const app = express();
app.use(express.json());
app.use(allroutes);
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to Spotify App"
    })
})

app.listen(PORT, (req, res) => {
    console.log("Server is Running on PORT " + PORT);
})