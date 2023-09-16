// hien tai k su dung babel nen k dung import from
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const initWebRoutes = require("./routes/web");
require('dotenv').config();

const app = express();

// set up view engine
configViewEngine(app);

//set up route
initWebRoutes(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('jwt is running on the port:' + PORT);
})