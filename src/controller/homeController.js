const userService = require('../sevices/userService');

const handleHelloWord = (req, res) => {
    // hat code len phan view
    let name = "fong";
    return res.render('home.ejs', { name });
}
const handleHelloUser = (req, res) => {
    return res.render('user.ejs');
}

const createUser = async (req, res) => {
    // with placeholder
    // with placeholder\
    let { username, email, password } = req.body;
    userService.createUserService(username, email, password);
    return res.send('create new user');

}

module.exports = { handleHelloWord, handleHelloUser, createUser }