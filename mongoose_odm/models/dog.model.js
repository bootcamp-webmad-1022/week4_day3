const mongoose = require('mongoose')

// Model
const dogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    color: String
})

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog