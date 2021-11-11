const { Schema, model } = require('mongoose')
const cfg = require('../../../config')
let schema = Schema({
    guildID: {
        type: String,
        required: true,
        unique: true,
    },
    prefix: {
        type: String,
        default: cfg.prefix
    }
})

try {
    module.exports = model('Guilds');
} catch (err) {
    module.exports = model('Guilds', schema)
}