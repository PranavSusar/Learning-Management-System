const { BadRequestError, UnauthenticatedError } = require('../errors')
const Student = require('../models/Student')
const {StatusCodes} = require('http-status-codes')
const sendEmail = require('../utils/sendEmail')


const register = async (req, res) => {
    const student = await Student.create({...req.body})
    const token = await student.createJWT()
    res.status(StatusCodes.CREATED).json({student:student.name, token})
}

const login = async (req, res) => {
    const {roll_number, password} = req.body

    if(!roll_number || !password){
        throw new BadRequestError('Please provide roll number and password')
    }
    
    const student = await Student.findOne({roll_number})
    
    if(!student){
        throw new UnauthenticatedError('Invalid Credentials')
    }
    
    const isPasswordCorrect = await student.comparePassword(password)
    
    const token = student.createJWT()
    
    res.status(StatusCodes.OK).json({student: student.name})
}

const forgotPassword = async(req,res,next) => {
    const {email} = req.body
    
    if(!email){
        throw new BadRequestError('Please provide email Id')
    }
    
    const student = await Student.findOne({email})
    
    if(!student){
        throw new UnauthenticatedError('Invalid email Id')
    }
                    
    const resetToken = student.createResetPasswordToken()
    
    await student.save({validateBeforeSave: false})
    
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/auth/resetPassword/${resetToken}`
    const message = `Click on the link below to reset password.\n\n${resetUrl}\n\nLink will be active for 10 minutes. `
    
    try {
        await sendEmail({
            email: student.email,
            subject: 'Reset Password',
            message: message
        })
        res.status(StatusCodes.OK).json({msg:"Password reset link sent"})
    } catch (err) {
        student.passwordResetToken = undefined
        student.passwordResetTokenExpires = undefined
        await student.save({validateBeforeSave: false})
        console.log(err)
        return next(err)
    }
     

}

const resetPassword = async (req,res) => {
    const token = crypto.createHash('sha256').update(req.params.token).digest(hex)
    const student = Student.findOne({passwordResetToken: token, passwordResetTokenExpires: {$gt: Date.now()}})
    
    if(!student)
    throw new BadRequestError('Token is invalid or has expired')

    student.password = req.body.password
    student.passwordResetToken = undefined
    student.passwordResetTokenExpires = undefined
    student.passwordChangedAt = Date.now()

    await student.save()

    res.status(StatusCodes.OK).json({msg:"password reset successfully"})

}

module.exports = {
    register, 
    login,
    forgotPassword,
    resetPassword,
}