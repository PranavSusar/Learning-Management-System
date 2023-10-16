const User = require('../models/User')
const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors')


const auth = (req,res,next) => {
    const token = req.cookies.access_token
    console.log(token)
    if(!token){
        throw new UnauthenticatedError('Authentication invalid')
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {userId:payload.userId, userName:payload.name, userRole:payload.role}
        next() 
    } catch (error) {
        throw new UnauthenticatedError('Authentication invalid')
    }
}

const checkRole = (roles) => async (req, res, next) =>{
    if(!roles.includes(req.user.role)){
        throw new UnauthenticatedError('You do not have access to this route')
    }
    next()
}

module.exports = {
    auth,
    checkRole
}