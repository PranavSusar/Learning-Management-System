const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')


const StudentSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'Please provide name'],
        minlength:3,
        maxlength:50
    },
    gender:{
        type: String,
        required: [true, 'Please provide gender'],
        enum: ['male', 'female', 'others']
    },
    email:{
        type:String,
        required:[true, 'Please provide email'],
        // match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide valid email']
    },    
    roll_number:{
        type:String,
        required:[true, 'Please provide roll number'],
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
    },
    passwordResetToken:{
        type: String,
        default: ""
    },
    passwordChangedAt: Date,
    passwordResetTokenExpires: Date,
})

StudentSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10)
    this.password =  bcrypt.hash(this.password, salt)
})

StudentSchema.methods.createJWT = function(){
    return jwt.sign({userId:this._id, name:this.name}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
}

StudentSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

StudentSchema.methods.createResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(32).toString('hex')

    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex')
    this.passwordResetTokenExpires = Date.now() + 10*60*1000
    
    return resetToken
}

module.exports = mongoose.model('Student', StudentSchema)