require('dotenv').config() // attaches the env variables on .env to the global process object

const express = require('express') // require the express package
const mongoose = require('mongoose') 
const choreoRoutes =  require('./routes/choreos')

// create express app
const app = express()

// global middlewear - function that fires for every request
app.use(express.json()) // looks for body in every request and passes it to req object
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next() // reqs will run this function first and then run "next"
})

// routes - react to requests
app.use('/api/choreos', choreoRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI) // assynchronous - returns a promise
    .then(() => { // fire a function when its complete
        app.listen(process.env.PORT, () => { // listen for requests (only when connected to db)
            console.log("connected to db & listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })



