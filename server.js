const express = require('express');
const expHbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const secret = require('./mongodb.secret');
const config = require('./config');
const routes = require("./controllers");
const app = express();

//connect mongoDB
mongoose.connect(
    `mongodb+srv://${secret.user}:${secret.password}@cluster0-2np1w.mongodb.net/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

//Set hbs engine
app.engine(config.engine, expHbs({ extname: config.engine }));
app.set('view engine', config.engine);

//Apply static folder
app.use(express.static('static'));

//Apply middleware & routes
app.use(bodyParser.urlencoded({ extended: true}));
routes.forEach(route => app.use(route));

//Start server
app.listen(config.port, () => console.log(`Server is running on http://localhost:${config.port}`));