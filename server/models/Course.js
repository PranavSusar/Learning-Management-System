const mongoose = require('mongoose')


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
    
},
{ timestamps: true })


module.exports = mongoose.model('Course', CourseSchema)