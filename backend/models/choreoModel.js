const mongoose = require('mongoose')

const Schema = mongoose.Schema

const choreoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        required: true
    }
}, { timestamps: true }) // automatically adds a created_at

module.exports = mongoose.model('Choreo', choreoSchema) // automatically creates a collection
