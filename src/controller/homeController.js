
const handleHelloWord = (req, res) => {
    // hat code len phan view
    let name = "fong";
    return res.render('home.ejs', { name });
}
const handleHelloUser = (req, res) => {
    return res.render('user.ejs');
}

module.exports = { handleHelloWord, handleHelloUser }