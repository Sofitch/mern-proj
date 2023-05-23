const express = require('express')

const router = express.Router() 

// GET all choreos
router.get("/", (req, res) => {
    res.json({msg: "GET all choreos"})
})

// GET a single choreo
router.get("/:id", (req, res) => {
    res.json({msg: "GET a single choreo"})
})

// POST a new choreo
router.post("/", (req, res) => {
    // req.body
    res.json({msg: "POST a new choreo"})
})

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