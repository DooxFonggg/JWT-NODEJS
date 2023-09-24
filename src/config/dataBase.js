
// get the client
const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt-nodejs'
})
// create the connection to database


module.exports = connection;