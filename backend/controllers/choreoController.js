const Choreo = require('../models/choreoModel')
const mongoose = require('mongoose')

// AUX
const resChoreoNotFound = (res) => {
    return res.status(404).json({error: 'No such choreo'})
}
const resOK = (res, data) => {
    return res.status(200).json(data)
}

// get all choreos
const getChoreos = async (req, res) => {
    const choreos = await Choreo.find({}).sort({createdAt: -1})
    resOK(res, choreos)
}

// get a single choreo
const getChoreo = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) { return resChoreoNotFound(res) }
    const choreo = await Choreo.findById(id)
    if (!choreo) { return resChoreoNotFound(res) }
    resOK(res, choreo)
}

// create a new choreo
const createChoreo = async (req, res) => {
    const {title, author, difficulty} = req.body
    
    // checking for errors
    let emptyFields = []
    if (!title) { emptyFields.push('title') }
    if (!author) { emptyFields.push('author') }
    if (!difficulty) { emptyFields.push('difficulty') }
    if (emptyFields.length > 0) {
        errorMsg = 'Please fill in all the fields.'
        return res.status(400).json({error: errorMsg, emptyFields})
    }

    // add doc to db 
    try {
        const choreo = await Choreo.create({title, author, difficulty}) // asynchronous
        resOK(res, choreo) // status is to say OK
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}


// delete a choreo
const deleteChoreo = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) { return resChoreoNotFound(res) }
    const choreo = await Choreo.findByIdAndDelete(id)
    if (!choreo) { return resChoreoNotFound(res) }
    resOK(res, choreo)
}


// update a choreo
const updateChoreo = async (req, res) => {
    const { id } = req.params
    const {title, author, difficulty} = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) { return resChoreoNotFound(res) }
    const choreo = await Choreo.findByIdAndUpdate(id, {...req.body}, {new: true}) // spreads the properties on the body
    if (!choreo) { return resChoreoNotFound(res) }
    resOK(res, choreo)
}


module.exports = {
    getChoreos,
    getChoreo,
    createChoreo,
    deleteChoreo,
    updateChoreo
}
