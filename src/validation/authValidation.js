const validator = require('express-validator')
const { transValidation } = require('../../lang/vi')

let register = [
    validator.check("email", transValidation.email_incorrect).isEmail().trim(),
    validator.check("gender", transValidation.gender_incorrect).isIn(['male', 'female']),
    validator.check('password', transValidation.password_incorrect)
    .isLength({ min: 8 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?_&])[A-Za-z\d$@$!%*?_&]{8,}$/),
    validator.check('password_confirmation', transValidation.password_confrimation_incorrect)
    .custom((value, { req }) => {
        return value === req.body.password
    })

]

module.exports = { register }