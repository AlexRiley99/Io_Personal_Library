//Creating the server 
require('dotenv').config()  //require environment variables
const express = require('express') //require express - pull in the express library
const app = express() //create an app variable - used to configure server

//configure mongoose to connect to mongodb database
const mongoose = require('mongoose') //require mongoose library

mongoose.connect(process.env.DATABASE_URI, {useNewUrlParser: true}) //references .env variable DATABASE_URI
const db = mongoose.connection
db.on('error', (error) => console.error(error)) //On error, log error - runs on error, hence "on()"
db.once('open', () => console.log('Connected to Database')) //Once connected, log connection - runs once, hence "once()"

app.use(express.json()) //configure server to accept json as a body

//Users Router
const usersRouter = require('./routes/users') //route all user information
app.use('/users', usersRouter) //use this route when querying users

app.listen(3000, () => console.log('Server Started')) //Listen on server 3000 and display message when server starts