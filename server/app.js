require('dotenv').config()
require('express-async-errors')


const mongoose = require('mongoose')

const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

//Routers
const authRouter = require('./routes/auth')
const coursesRouter = require('./routes/courses')


//error handlers
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

app.use(express.json())
app.use(cookieParser())

//middlewares
const authenticateUser = require('./middleware/authentication')


//routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/courses', coursesRouter)
// app.get('/api/v1/protected', authenticateUser, (req,res) => res.send("protected"))



app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(port, () => console.log(`listening on port ${port} ...`))
    } catch (error) {
        console.log(error)
    }
}


start()