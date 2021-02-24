 const express = require("express")
 const ConnectDB = require("./config/connectDB")
 const initRoutes = require('./routes/web')
 const configViewEngine = require('./config/viewEngine')
 const bodyParser = require('body-parser')
     // Init app
 let app = express()
     //Connect DB
 ConnectDB.connectDB()

 // Config view engine
 configViewEngine.configViewEngine(app)

 // Enable post data for request
 app.use(bodyParser.urlencoded({ extended: true }))

 // init all routes
 initRoutes.initRoutes(app)

 app.listen(process.env.PORT, process.env.HOSTNAME, () => {
     console.log(`Hello Quang Kieu, this is notice from ${process.env.HOSTNAME}: ${process.env.PORT}`)
 })