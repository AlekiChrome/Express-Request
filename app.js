// ! Dependencies
const express = require("express");

// ! Configuration
const app = express();

// ! Routes
app.get("/", (req, res) => {
    res.send("Welcome to the express request app")
})

// ! Export
module.exports = app;
