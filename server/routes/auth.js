const express = require('express')
const router = express.Router()

const {login, register, forgotPassword, resetPassword} = require('../controllers/auth')

router.route('/register').post(register)
router.route('/login').get(login)
router.route('/forgotpassword').post(forgotPassword)
router.route('/resetpassword:token').post(resetPassword)

module.exports = router