import express from "express"
import ConnectDB from "./config/connectDB"
import ContactModel from "./models/contact.model"
let app = express()
ConnectDB()
let hostname = "localhost"
let port = 3000

app.get('testDB', async(req, res) => {
    try {
        let item = {
            userId: "Quang",
            contactId: "123"
        }
        let contact = await ContactModel.createNew(item)
        res.send(contact)
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, hostname, () => {
    console.log(`Hello Quang Kieu, this is notice from ${hostname}: ${port}`)
})