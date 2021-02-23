let getHome = (req, res) => {
    return res.render('main/home/home')
}

let getLogout = (req, res) => {
    // do something

}

module.exports = { getHome, getLogout }