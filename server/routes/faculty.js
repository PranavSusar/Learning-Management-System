const express = require('express')
const router = express.Router()

const { dashboard } = require('../controllers/faculty')

router.route('/dashboard').get(dashboard)

module.exports = router