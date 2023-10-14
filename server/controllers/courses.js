const Course = require('../models/Course')
const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')

const getAllCourses = async(req,res) => {
    const courses = await Course.find().sort('createdAt')
    res.status(StatusCodes.OK).json({courses, count:courses.length})
}

const getCourse = async(req,res) => {
    const {id:courseId} = req.params

    const course = await Course.findOne({
        _id:courseId
    })

    if(!course){
        throw new NotFoundError(`No course with id ${courseId}`)
    }

    res.status(StatusCodes.OK).json({course})
}

const createCourse = async(req,res) => {
    const {section, batch, instructorMailId} = req.body

    const students = await User.find({
        section, batch
    }) 

    const studentIds = students.map(student => student._id)
    const instructor = await User.find({
        email:instructorMailId
    })


    const course = await Course.create({
        ... req.body,  
        students:studentIds, 
        instructor:instructor._id 
    })
    res.status(StatusCodes.CREATED).json({course})

}

const deleteCourse = async(req,res) => {
    const {id:courseId} = req.params
    const course = await Course.findByIdAndDelete({
        _id:courseId
    })
    if(!course){
        throw new NotFoundError(`No course with id ${courseId}`)
    }
    res.status(StatusCodes.OK).json({course})
}


module.exports = {
    getAllCourses,
    getCourse,
    createCourse,
    deleteCourse
}