const express = require('express')
const Choreo = require('../models/choreoModel')
const {
    getChoreos,
    getChoreo,
    createChoreo,
} = require('../controllers/choreoController')

const router = express.Router() 

// GET all choreos
router.get("/", getChoreos)

// GET a single choreo
router.get("/:id", getChoreo)

// POST a new choreo
router.post("/", createChoreo)

// DELETE a choreo
router.delete("/:id", (req, res) => {
    res.json({msg: "DELETE a choreo"})
})

// UPDATE a choreo
router.patch("/:id", (req, res) => {
    res.json({msg: "UPDATE a choreo"})
})

// export the router to be imported and used in server.js
module.exports = router