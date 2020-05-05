const Article = require('../models/Article');
const config = require("../config");

module.exports = async (req, res) => {
    const articles = await Article.find({ limit: config.limit });
    res.render('home', {
        headTitle: 'Open blog',
        headDescription: 'Open blog website. Check out interesting articles here!',
        articles
    });
}