//Creating a user model
const mongoose = require('mongoose') 

//create new schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    un: {
        type: String,
        required: true
    },
    pw: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema) 