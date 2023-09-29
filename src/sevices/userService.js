const bcrypt = require('bcryptjs');
// const connection = require('../config/dataBase');
const mysql = require('mysql2/promise');

// create the connection to database


const createUserService = async (username, email, password) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt-nodejs'
    })
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

const readAllUsers = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'jwt-nodejs'
        })
        const [rows, fields] = await connection.execute('SELECT * FROM user');
        return rows;
    } catch (error) {
        console.error('>> check err', error);
        throw error; // Rethrow the error to be caught in the calling function
    }
}

const deleteUser = async (id) => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'jwt-nodejs'
        })
        const [rows, fields] = await connection.execute('DELETE FROM user WHERE id=?', [id]);
        return rows;
    } catch (error) {
        console.error('>> check err', error);
        throw error; // Rethrow the error to be caught in the calling function
    }
}

const getUpdateUserById = async (id) => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'jwt-nodejs'
        })
        const [rows, fields] = await connection.execute('SELECT * FROM user WHERE id=?', [id]);
        return rows;
    } catch (error) {
        console.error('>> check err', error);
        throw error; // Rethrow the error to be caught in the calling function
    }
}
const updateUser = async (email, username, id) => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'jwt-nodejs'
        })
        const [rows, fields] = await connection.execute('UPDATE user SET email=?, username=? WHERE id=? ', [email, username, id]);
        return rows;
    } catch (error) {
        console.error('>> check err', error);
        throw error; // Rethrow the error to be caught in the calling function
    }
}
module.exports = { createUserService, readAllUsers, deleteUser, getUpdateUserById, updateUser }