require('dotenv').config()
require('express-async-errors')


const mongoose = require('mongoose')

const express = require('express')
const app = express()

//Routers
const authRouter = require('./routes/auth')


//error handlers
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

app.use(express.json())

//routes
app.use('/api/v1/auth', authRouter)



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