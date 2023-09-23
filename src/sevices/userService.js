const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt-nodejs'
})

const createUserService = (username, email, password) => {
    let salt = bcrypt.genSaltSync(10);
    let hashPass = bcrypt.hashSync(password, salt);
    // check pass word
    let checkpass = bcrypt.compareSync(password, hashPass); // true
    if (checkpass) {
        connection.query(
            'INSERT INTO user (email,password, username) VALUES (?, ?, ?)', [email, hashPass, username],
            function (err, results) {
                if (err) {
                    console.log('check err', err);
                }
                console.log(results);
            }
        );
    }
}

module.exports = { createUserService }