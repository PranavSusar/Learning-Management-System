const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')


const CourseSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'Please provide course name'],
    },
    code:{
        type: String,
        required:[true, 'Please provide course code'],
    },
    batch:{
        type: String,
    },
    section:{
        type: String,
    },
    users: [{ 
        type: mongoose.Schema.Types.ObjectId, ref: 'User' 
    }],
    timestamps: {
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    },
    

    
})


module.exports = mongoose.model('Course', CourseSchema)