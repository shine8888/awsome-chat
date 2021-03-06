const mongoose = require("mongoose")
const bluebird = require("bluebird")

var connectDB = () => {
    mongoose.Promise = bluebird
        // mongodb://localhost:27017/awsome_chat
    var URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    return mongoose.connect(URI, {
        useMongoClient: true
    })
}
module.exports = { connectDB }