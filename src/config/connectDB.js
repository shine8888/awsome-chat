import mongoose from "mongoose"
import bluebird from "bluebird"

var connectDB = () => {
    mongoose.Promise = bluebird

    var DB_CONNECTION = 'mongodb'
    var DB_HOST = 'localhost'
    var DB_PORT = '27017'
    var DB_NAME = 'awesome_chat'
    var DB_USERNAME = ''
    var DB_PASSWORD = ''

    // mongodb://localhost:27017/awsome_chat
    // var URI = `${DB_CONNECTION}://${DB_HOST}:${DB_PORT}/${DB_NAME}`
    // console.log(URI)
    return mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
}

module.exports = { connectDB }