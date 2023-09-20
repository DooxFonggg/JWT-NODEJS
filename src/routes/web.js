const express = require('express');
const homeController = require('../controller/homeController');
const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.handleHelloWord);
    router.get('/user', homeController.handleHelloUser);
    router.post('/create-user', homeController.createUser);
    return app.use('/', router);
}

// const postCreateUser = (req, res) => {

// }

module.exports = initWebRoutes;