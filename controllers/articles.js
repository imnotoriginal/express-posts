const express = require('express');
const Article = require('../models/Article');

const router = express.Router();

router.get('/article/:id', async (req, res) => {
    const article = await Article.find(parseInt(req.params.id));
    res.render('article', {
        headTitle: article.title,
        headDescription: article.description,
        article
    });
});

module.exports = router;