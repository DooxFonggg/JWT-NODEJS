// hien tai k su dung babel nen k dung import from
const express = require("express");
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const configViewEngine = require("./config/viewEngine");
const initWebRoutes = require("./routes/web");
const connection = require('./config/connetionDB');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// set up view engine
configViewEngine(app);

//set up route
initWebRoutes(app);



const PORT = process.env.PORT || 8080;

connection();

app.listen(PORT, () => {
    console.log('jwt is running on the port:' + PORT);
})