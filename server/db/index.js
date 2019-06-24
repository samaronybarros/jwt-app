const mongoose = require('mongoose')
const config = require('../config')

mongoose.connect(config.serverDb, { useNewUrlParser: true }).catch(e => {
    console.error(config.serverDb, e.message)
})
const db = mongoose.connection

module.exports = db
