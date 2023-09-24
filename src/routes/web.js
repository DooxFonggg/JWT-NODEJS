const express = require('express');
const homeController = require('../controller/homeController');
const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.handleHelloWord);
    router.get('/user', homeController.getAllUser);
    router.post('/create-user', homeController.createUser);
    router.post('/delete-user/:id', homeController.postDeleteUser);
    return app.use('/', router);
}

// const postCreateUser = (req, res) => {

// }

module.exports = initWebRoutes;