const express = require('express')
const Choreo = require('../models/choreoModel')
const {
    getChoreos,
    getChoreo,
    createChoreo,
    deleteChoreo,
    updateChoreo
} = require('../controllers/choreoController')

const router = express.Router() 

// GET all choreos
router.get("/", getChoreos)

// GET a single choreo
router.get("/:id", getChoreo)

// POST a new choreo
router.post("/", createChoreo)

// DELETE a choreo
router.delete("/:id", deleteChoreo)

// UPDATE a choreo
router.patch("/:id", updateChoreo)

// export the router to be imported and used in server.js
module.exports = router