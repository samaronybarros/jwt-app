const express = require('express')
const { AdminCtrl } = require('../controllers')
const router = express.Router()

router.post('/admin', AdminCtrl.insertAdmin)

module.exports = router
