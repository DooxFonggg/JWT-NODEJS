const userService = require('../sevices/userService');

const handleHelloWord = (req, res) => {
    // hat code len phan view
    let name = "fong";
    return res.render('home.ejs', { name });
}

const createUser = async (req, res) => {
    // with placeholder
    // with placeholder\
    let { username, email, password } = req.body;
    userService.createUserService(username, email, password);
    return res.redirect('/user');

}

const getAllUser = async (req, res) => {
    let results = await userService.readAllUsers();
    console.log('check res', results);
    return res.render('user.ejs', { listUsers: results });
}

const postDeleteUser = async (req, res) => {
    let id = req.params.id;
    await userService.deleteUser(id);
    return res.redirect('/user');
}

module.exports = { handleHelloWord, createUser, getAllUser, postDeleteUser }