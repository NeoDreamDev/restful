const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv/config');

// IMPORT ROUTES
// const postRoute = require('./routes/posts');

// app.use('/posts', postRoute);

//  MIDDLEWARES in Express
// a function that executes when a route is being hit
app.use("/posts", () => {
    console.log("this is a middleware running");
});
// eerytime you hit a route this is gonna check is user is authenticated
//app.use(auth);

// YOU HAVE THE ABILITY TO CREATE ROUTES SIMLPY
// ROUTES in Express
app.get("/", (req, res) => {
    res.send("We here bro");
});
app.get("/posts", (req, res) => {
    res.send("We in posts bro");
});

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true
    },
    () => console.log("connected to DB")
);

// How do we start listening to the server?
app.listen(3000);