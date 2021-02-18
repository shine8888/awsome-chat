 const express = require("express")
 const ConnectDB = require("./config/connectDB")
     //  const ContactModel = require("./models/contact.model")
 const configViewEngine = require('./config/viewEngine')
     // Init app
 let app = express()
     //Connect DB
 ConnectDB.connectDB()

 // Config view engine
 configViewEngine.configViewEngine(app)

 app.get('/', (req, res) => {
     return res.render('main/master')
 })

 app.get('/login-register', (req, res) => {
     return res.render('auth/loginRegister')
 })

 app.listen(process.env.PORT, process.env.HOSTNAME, () => {
     console.log(`Hello Quang Kieu, this is notice from ${process.env.HOSTNAME}: ${process.env.PORT}`)
 })