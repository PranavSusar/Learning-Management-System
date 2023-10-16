
const Course = require('../models/Course')
const {StatusCodes} = require('http-status-codes')

const dashboard = async(req,res) => {
    const studentId = req.user.userId

    const courses = await Course.find({
        students:studentId
    })

    res.status(StatusCodes.OK).json({courses, success:true})
}

module.exports = { 
    dashboard
}