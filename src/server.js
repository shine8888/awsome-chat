 const express = require("express")
 const ConnectDB = require("./config/connectDB")
 const ContactModel = require("./models/contact.model")
 let app = express()
 ConnectDB.connectDB()

 app.get('/testDB', async(req, res) => {
     try {
         let item = {
             userId: "2234324",
             contactId: "1234242423433"
         }
         let contact = await ContactModel.createNew(item)
         res.send(contact)
     } catch (error) {
         console.log(error)
     }
 })

 app.listen(process.env.PORT, process.env.HOSTNAME, () => {
     console.log(`Hello Quang Kieu, this is notice from ${process.env.HOSTNAME}: ${process.env.PORT}`)
 })