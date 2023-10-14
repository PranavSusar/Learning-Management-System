const Course = require('../models/Course')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')

const getAllCourses = async(req,res) => {
    res.send("all courses")
}

const getCourse = async(req,res) => {
    res.send("one course")
}

const createCourse = async(req,res) => {
    res.send("course created")
}

const deleteCourse = async(req,res) => {
    res.send("course deleted")
}

const updateCourse = async(req,res) => {
    res.send("course deleted")
}

module.exports = {
    getAllCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
}