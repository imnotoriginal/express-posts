const router = require('express').Router(),
    markdown = require('markdown-it')(),
    Post = require('../models/Post'),
    safeQuery = require('../utils/safeQuery');

router.get('/add-post', (req, res) => {
    res.render('addPost', { activePageAddPost: true, headTitle: "Add post" });
});

router.post('/add-post', (req, res, next) => {
    const { title, description, author, text } = req.body;
    safeQuery.sync(next,
        () => new Post({
            title, description, author,
            text: markdown.render(text)
        }).save()
    )

    res.redirect('/');
})

module.exports = router;