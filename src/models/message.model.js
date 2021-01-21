const mongoose = require('mongoose')
let Schema = mongoose.Schema

let MessageSchema = new Schema({
    sender: {
        id: String,
        username: String,
        avatar: String
    },
    receiver: {
        id: String,
        username: String,
        avatar: String
    },
    text: String,
    file: { data: Buffer, contentType: String, fileName: String },
    createdAt: { type: Number = Date.now },
    updatedAt: { type: Number = null },
    deletedAt: { type: Number = null }
})

module.exports = mongoose.model("Message", MessageSchema)