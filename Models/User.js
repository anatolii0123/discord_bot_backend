const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')
const Role = require('./Role');

let schema = Schema({
    discordId: {
        type: String,
        required: true,
        unique: true
    },
    discordTag: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: ''
    },
    guilds: {
        type: Array,
        required: true
    },
    role: [{type: mongoose.Schema.Types.ObjectId, ref: 'Role'}]
})

module.exports = model('User', schema)