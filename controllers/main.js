const express = require('express');
const Article = require('../models/Article');
const config = require("../config");

const router = express.Router();

router.get('/', async (req, res) => {
    const articles = await Article.getAll(config.limit);
    res.render('home', {
        headTitle: 'Open blog',
        headDescription: 'Open blog website. Check out interesting articles here!',
        articles,
        activePageHome: true
    });
});

module.exports = router;