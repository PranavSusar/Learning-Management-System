require('dotenv').config();
require('express-async-errors');
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Routers
const authRouter = require('./routes/auth');
const coursesRouter = require('./routes/courses');
const studentRouter = require('./routes/student');
const facultyRouter = require('./routes/faculty');
const attendanceRouter = require('./routes/attend'); // Import the attendance route

// Error handlers
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

app.use(express.json());
app.use(cookieParser());

// Middlewares
const { auth, checkRole } = require('./middleware/authentication');

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/courses', auth, checkRole(['admin']), coursesRouter);
app.use('/api/v1/student', auth, checkRole(['student']), studentRouter);
app.use('/api/v1/faculty', auth, checkRole(['faculty']), facultyRouter);

// Use the attendance routes, protected by authentication and role-based access control
app.use('/api/v1/attendance', auth, checkRole(['faculty']), attendanceRouter);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Listening on port ${port} ...`));
    } catch (error) {
        console.log(error);
    }
};

start();
