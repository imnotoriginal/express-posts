const express = require('express');
const expHbs = require('express-handlebars');
const config = require('./config');
const routes = require("./controllers");
const app = express();

//Set hbs engine
app.engine(config.engine, expHbs({ extname: config.engine }));
app.set('view engine', config.engine);

//Apply static folder
app.use(express.static('static'));

//Apply routes
routes.forEach(route => app.use(route));

//Start server
app.listen(config.port, () => console.log(`Server is tunning on http://localhost:${config.port}`));