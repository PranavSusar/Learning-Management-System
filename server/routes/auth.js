const express = require("express");
const router = express.Router();

const {
	login,
	register,
	forgotPassword,
	resetPassword,
	logout,
} = require("../controllers/auth");

<<<<<<< HEAD
router.route('/register').post(register)
router.route('/login_student').get(async (req,res) => login(req, "student", res))
router.route('/login_faculty').get(async (req,res) => login(req, "faculty", res))
router.route('/login_admin').get(async (req,res) => login(req, "admin", res))
router.route('/logout').get(logout)
router.route('/forgotpassword').post(forgotPassword)
router.route('/resetpassword:token').post(resetPassword)
=======
router.route("/register").post(register);
router.route("/login_stu").get(async (req, res) => login(req, "student", res));
router.route("/login_fac").get(async (req, res) => login(req, "faculty", res));
router.route("/logout").get(logout);
router.route("/forgotpassword").post(forgotPassword);
router.route("/resetpassword:token").post(resetPassword);
>>>>>>> 5caadaa (Dashboard/Webcam Added)

module.exports = router;
