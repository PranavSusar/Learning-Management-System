const express = require('express')
const router = express.Router()

const {login, register, forgotPassword, resetPassword, logout} = require('../controllers/auth')

router.route('/register').post(register)
router.route('/login_stu').get(async (req,res) => login(req, "student", res))
router.route('/login_fac').get(async (req,res) => login(req, "faculty", res))
router.route('/logout').get(logout)
router.route('/forgotpassword').post(forgotPassword)
router.route('/resetpassword:token').post(resetPassword)

module.exports = router