const express = require('express');
const expHbs = require('express-handlebars');
const config = require('./config');

const app = express();

app.engine(config.engine, expHbs({ extname: config.engine }));
app.set('view engine', config.engine);

app.get('/', (req, res) => {
    res.render('home', { title: "test", name: "World" });
});

app.listen(config.port, () => console.log(`Server is tunning on http://localhost:${config.port}`));