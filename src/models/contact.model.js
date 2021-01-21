const mongoose = require('mongoose')
let Schema = mongoose.Schema

let ContactSchema = new Schema({
    userId: String,
    contactId: String,
    status: { type: Boolean = false },
    createdAt: { type: Number = Date.now },
    updatedAt: { type: Number = null },
    deletedAt: { type: Number = null }
})

module.exports = mongoose.model("Contact", ContactSchema)