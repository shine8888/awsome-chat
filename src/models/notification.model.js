const mongoose = require('mongoose')
let Schema = mongoose.Schema

let NotificationSchema = new Schema({
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
    type: String,
    content: String,
    isRead: { type: Boolean = false },
    file: { data: Buffer, contentType: String, fileName: String },
    createdAt: { type: Number = Date.now }

})

module.exports = mongoose.model("Notification", NotificationSchema)