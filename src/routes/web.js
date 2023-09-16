const express = require('express');
const homeController = require('../controller/homeController');
const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.handleHelloWord);
    router.get('/user', homeController.handleHelloUser);
    return app.use('/', router);
}

module.exports = initWebRoutes;