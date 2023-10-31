const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendence'); // Import the controller

router.post('/create', attendanceController.createAttendance);
router.get('/student/:studentId', attendanceController.getAttendance);
router.put('/:attendanceId', attendanceController.updateAttendance);
router.delete('/:attendanceId', attendanceController.deleteAttendance);

module.exports = router;
