const mongoose = require('mongoose')
let Schema = mongoose.Schema

let ChatGroupSchema = new Schema({
    name: String,
    userAmount: { type: Number, min: 3, max: 100 },
    messageAmount: { type: Number = 0 },
    userId: String,
    members: [{ userId: String }],
    createdAt: { type: Number = Date.now },
    updatedAt: { type: Number = null },
    deletedAt: { type: Number = null }
})

module.exports = mongoose.model("Chat-Group", ChatGroupSchema)