const { Schema, model } = require('mongoose')

let schema = Schema({
    id: {
        type: String,
        required: true
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
})

module.exports = model('Role', schema)