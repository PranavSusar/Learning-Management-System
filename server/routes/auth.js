const express = require('express')
const router = express.Router()

const {login, register, forgotPassword, resetPassword, logout} = require('../controllers/auth')

router.route('/register').post(register)
router.route('/login').get(login)
router.route('/logout').get(logout)
router.route('/forgotpassword').post(forgotPassword)
router.route('/resetpassword:token').post(resetPassword)

module.exports = router