const expHbs = require('express-handlebars'),
    express = require('express'),
    routes = require("../controllers"),
    config = require('./config'),
    bodyParser = require('../handlers/bodyParser'),
    notAvailable = require('../handlers/notAvailable'),
    errors = require('../handlers/errors');

module.exports = app => {

    //Set hbs engine
    app.engine(config.engine, expHbs({ extname: config.engine }));
    app.set('view engine', config.engine);

    //Apply static folder
    app.use(express.static('static'));

    //Apply middleware & routes
    app.use(bodyParser);
    routes.forEach(route => app.use(route));
    app.use(notAvailable);
    app.use(errors);
}
