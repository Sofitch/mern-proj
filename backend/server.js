require('dotenv').config() // attaches the env variables on .env to the global process object

const express = require('express') // require the express package
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

// listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT)
})

