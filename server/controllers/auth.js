const { BadRequestError, UnauthenticatedError } = require('../errors')
const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const sendEmail = require('../utils/sendEmail')


const register = async (req, res) => {
    const user = await User.create({...req.body})
    const token = await user.createJWT()
    res.status(StatusCodes.CREATED).json({user:user.name, token})
}

const login = async (req, role, res) => {
    const {email, password} = req.body

    if(!email || !password){
        throw new BadRequestError('Please provide roll number and password')
    }
    
    const user = await User.findOne({email})
    
    if(!user){
        throw new UnauthenticatedError('Invalid Credentials')
    }

    if(user.role !== role){
        throw new UnauthenticatedError('Please make sure you are logging in from the right portal')
    }
    
    const isPasswordCorrect = await user.comparePassword(password)
    
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid credentials')
    }

    const token = user.createJWT()

    res.cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    }).status(StatusCodes.OK).json({user: user.name})
}

const logout = async (req,res) =>{
    res.clearCookie("access_token").status(StatusCodes.OK).json({success: true, msg: "Successfully logged out"})
}

const forgotPassword = async(req,res,next) => {
    const {email} = req.body
    
    if(!email){
        throw new BadRequestError('Please provide email Id')
    }
    
    const user = await User.findOne({email})
    
    if(!user){
        throw new UnauthenticatedError('Invalid email Id')
    }
                    
    const resetToken = user.createResetPasswordToken()
    
    await user.save({validateBeforeSave: false})
    
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/auth/resetPassword/${resetToken}`
    const message = `Click on the link below to reset password.\n\n${resetUrl}\n\nLink will be active for 10 minutes. `
    
    try {
        await sendEmail({
            email: user.email,
            subject: 'Reset Password',
            message: message
        })
        res.status(StatusCodes.OK).json({msg:"Password reset link sent"})
    } catch (err) {
        user.passwordResetToken = undefined
        user.passwordResetTokenExpires = undefined
        await user.save({validateBeforeSave: false})
        console.log(err)
        return next(err)
    }
     

}

const resetPassword = async (req,res) => {
    const token = crypto.createHash('sha256').update(req.params.token).digest(hex)
    const user = User.findOne({passwordResetToken: token, passwordResetTokenExpires: {$gt: Date.now()}})
    
    if(!user)
    throw new BadRequestError('Token is invalid or has expired')

    user.password = req.body.password
    user.passwordResetToken = undefined
    user.passwordResetTokenExpires = undefined
    user.passwordChangedAt = Date.now()

    await user.save()

    res.status(StatusCodes.OK).json({msg:"password reset successfully"})

}

module.exports = {
    register, 
    login,
    forgotPassword,
    resetPassword,
    logout,
}