
const Course = require('../models/Course')
const {StatusCodes} = require('http-status-codes')

const dashboard = async(req,res) => {
    const facultyId = req.user.userId

    const courses = await Course.find({
        instructor:facultyId
    })

    res.status(StatusCodes.OK).json({courses, success:true})
}

module.exports = {
    dashboard
}