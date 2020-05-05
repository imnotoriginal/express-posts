const express = require('express');
const expHbs = require('express-handlebars');
const config = require('./config');
const mainRoute = require("./controllers/main");
const app = express();

app.engine(config.engine, expHbs({ extname: config.engine }));
app.set('view engine', config.engine);

app.get('/', mainRoute);

app.listen(config.port, () => console.log(`Server is tunning on http://localhost:${config.port}`));