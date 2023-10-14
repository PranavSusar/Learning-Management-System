const express = require('express')
const router = express.Router()

const {
    getAllCourses,
    getCourse,
    createCourse,
    deleteCourse,
    updateCourse,
} = require('../controllers/courses')

router.route('/').post(createCourse).get(getAllCourses)
router.route('/:id').patch(updateCourse).delete(deleteCourse).get(getCourse)

module.exports = router
