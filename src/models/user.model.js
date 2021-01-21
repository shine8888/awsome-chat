const mongoose = require('mongoose')
let Schema = mongoose.Schema

let UserSchema = new Schema({
    username: String,
    gender: { type: String = "male" },
    phone: { type: Number = null },
    address: { type: String = null },
    avatar: { type: String = "avatar-default.jpg" },
    role: { type: String = 'user' },
    local: {
        email: { type: String, trim: true },
        password: String,
        isActive: { type: Boolean = false },
        verifyToken: String
    },
    facebook: {
        uid: String,
        token: String,
        email: { type: String, trim: true }
    },
    google: {
        uid: String,
        token: String,
        email: { type: String, trim: true }
    },
    createdAt: { type: Number = Date.now },
    updatedAt: { type: Number = null },
    deletedAt: { type: Number = null }
})

module.exports = mongoose.model("User", UserSchema)