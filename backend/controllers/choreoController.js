const Choreo = require('../models/choreoModel')

// get all choreos
const getChoreos = async (req, res) => {
    const choreos = await Choreo.find({}).sort({createdAt: -1})
    res.status(200).json(choreos)
}


// get a single choreo
const getChoreo = async (req, res) => {
    const { id } = req.params
    const choreo = await Choreo.findById(id)
    if (!choreo) {
        return res.status(404).json({error: 'No such choreo'})
    }
    res.status(200).json(choreo)
}

// create a new choreo
const createChoreo = async (req, res) => {
    const {title, author, difficulty} = req.body
    // add doc to db 
    try {
        const choreo = await Choreo.create({title, author, difficulty}) // asynchronous
        res.status(200).json(choreo) // status is to say OK
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}


// delete a choreo

// update a choreo

module.exports = {
    getChoreos,
    getChoreo,
    createChoreo
}
