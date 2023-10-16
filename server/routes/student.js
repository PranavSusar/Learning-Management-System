const express = require('express')
const router = express.Router()

const { dashboard } = require('../controllers/student')

router.route('/dashboard').get(dashboard)

module.exports = router