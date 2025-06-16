// express server

// old express importing / exporting process
const express = require("express");
const cors = require('cors')
const Pet = require('./pet-model.js')

const server = express();
server.use(cors())

server.get('/api/pets', async (req, res, next) => {
    try {
        const pets = await Pet.find(req.query)
        if (pets.length) {
            res.json(pets)
        } else {
            next({message: "No pets match that criteria.", status: 404})
        }
        
    } catch (err) {
        next(err)
    }
})


server.use("/*", (req, res, next) => {
    // req:request object
    // res: response object
    // next: a special object that signals req and res to move to next piece of pipeline
    next({message: "Not Found!", status: 404})
});

//error handling
server.use((err, req, res, next) => {
    const {message, status = 500} = err
    console.log(message)
    res.status(status).json({message}) // only for dev
})

module.exports = server;
