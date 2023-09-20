const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt-nodejs'
});

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
    let { email, password, username } = req.body;
    console.log('>> check username', username);
    connection.query(
        'INSERT INTO user (email,password, username) VALUES (?, ?, ?)', [username, email, password],
        function (err, results) {
            if (err) {
                console.log('check err', err);
            }
            console.log(results);
        }
    );
    return res.send('create new user');

}

module.exports = { handleHelloWord, handleHelloUser, createUser }