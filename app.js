// ! Dependencies
const express = require("express");
const rocks = require("./models/rock.js")

// ! Configuration
const app = express();

// ! Routes
app.get("/", (req, res) => {
    res.send("Welcome to the express request app")
});

app.get("/rocks", (req, res) => {
    res.send(rocks);
});

app.get("./rocks/:index", (req, res) => {
    const index = req.params
    if (rocks[index]) {
        res.send(rocks[index])
    } else {
        res.send(`Sorry no rocks at [${index}] exists`);
    }
});

// ! Export
module.exports = app;
