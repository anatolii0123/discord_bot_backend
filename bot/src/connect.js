const cfg = require('../../config')
const mongoose = require('mongoose')

module.exports = {
    connect: () => {
        try {
            mongoose.connect(cfg.database)
            console.log('connected to database with succes!')
        } catch(err) {
            console.log(err)
        }
    }
}