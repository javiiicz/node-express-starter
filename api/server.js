// express server

// old express importing / exporting process
const express = require("express");

const server = express();

server.get('/api/pets', (req, res, next) => {
    res.status(200).json([
        {id:1, name: 'Fido'},
        {if:2, name: 'Bicho'}
    ])
})


server.use("/*", (req, res, next) => {
    // req:request object
    // res: response object
    // next: a special object that signals req and res to move to next piece of pipeline
    res.status(404).json({ message: 'Not Found' });
});

module.exports = server;
