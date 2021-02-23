const express = require('express')
const { home, auth } = require('../controllers/index')
let router = express.Router()

/**
 * Init all routes
 * @param app from exactly express modules
 */

let initRoutes = (app) => {
    router.get('/', home.getHome)

    router.get('/login-register', auth.getLoginRegister)

    return app.use("/", router)
}
module.exports = { initRoutes }