const mongoose = require('mongoose')

const textschema = mongoose.Schema({
    message: String
})

module.exports = mongoose.model('Text', textschema)