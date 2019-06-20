const express = require('express')
const { AdminCtrl } = require('../controllers')
const router = express.Router()

router.post('/admin/auth', AdminCtrl.authenticate)

module.exports = router
