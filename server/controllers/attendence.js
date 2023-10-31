
const Attendance = require('../models/Attendence');

// Create a new attendance record
exports.createAttendance = async (req, res) => {
    try {
        const newAttendance = new Attendance(req.body);
        const savedAttendance = await newAttendance.save();
        res.json(savedAttendance);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Retrieve attendance records for a specific student or course
exports.getAttendance = async (req, res) => {
    try {
        const { studentId, courseId } = req.params;
        const attendance = await Attendance.find({ studentId, courseId });
        res.json(attendance);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an attendance record
exports.updateAttendance = async (req, res) => {
    try {
        const updatedAttendance = await Attendance.findByIdAndUpdate(req.params.attendanceId, req.body, { new: true });
        res.json(updatedAttendance);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete an attendance record
exports.deleteAttendance = async (req, res) => {
    try {
        await Attendance.findByIdAndRemove(req.params.attendanceId);
        res.json({ message: 'Attendance record deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
