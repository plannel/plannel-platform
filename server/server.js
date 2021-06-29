import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import passport from 'passport'

import connectDB from './config/db.js'
import usersRoutes from './routes/api/users.js'

dotenv.config()

connectDB()

const app = express()

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(bodyParser.json())

// Passport middleware
app.use(passport.initialize())

// Passport config
import config from './config/passport.js'
config(passport)

// Routes
app.use('/api/users', usersRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
