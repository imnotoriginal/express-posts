const expHbs = require('express-handlebars'),
    express = require('express'),
    routes = require("../controllers"),
    config = require('./config'),
    handlers = require('../handlers');

module.exports = app => {

    //Set hbs engine
    app.engine(config.engine, expHbs({ extname: config.engine }));
    app.set('view engine', config.engine);

    //Apply static folder
    app.use(express.static('static'));

    //Apply middleware & routes
    routes.forEach(route => app.use(route));
    handlers.forEach(handler => app.use(handler));
}
