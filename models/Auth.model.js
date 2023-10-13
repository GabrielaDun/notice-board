const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    login: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: true },
    phone: { type: String, required: true },
})

module.exports = mongoose.model('Auth', authSchema)