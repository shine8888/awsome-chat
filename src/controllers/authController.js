const { validationResult } = require('express-validator')
let getLoginRegister = (req, res) => {
    return res.render('auth/master')
}

let postRegister = (req, res) => {
    let errorsArr = []

    let validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped())
        errors.forEach(element => {
            errorsArr.push(element.msg)
        });
        console.log(errorsArr)
    }
    console.log(req.body)
}
module.exports = { getLoginRegister, postRegister }