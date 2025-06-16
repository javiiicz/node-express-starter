// express server

// old express importing / exporting process
const express = require("express");

const server = express();

server.use("/*", (req, res, next) => {
    // req:request object
    // res: response object
    // next: a special object that signals req and res to move to next piece of pipeline

    res.status(200).json('You called the server...');

    
});

module.exports = server;
