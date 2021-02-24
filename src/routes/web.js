const express = require('express')
const { home, auth } = require('../controllers/index')
const { authValidation } = require('../validation/index')
let router = express.Router()

/**
 * Init all routes
 * @param app from exactly express modules
 */

let initRoutes = (app) => {
    router.get('/', home.getHome)

    router.get('/login-register', auth.getLoginRegister)

    router.post("/register", authValidation.register, auth.postRegister)

    return app.use("/", router)
}
module.exports = { initRoutes }