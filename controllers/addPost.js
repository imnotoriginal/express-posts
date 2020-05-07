const router = require('express').Router();
const markdown = require('markdown-it')();
const Post = require('../models/Post');

router.get('/add-post', (req, res) => {
    res.render('addPost', { activePageAddPost: true, headTitle: "Add post" });
});

router.post('/add-post', (req, res) => {
    const { title, description, author, text } = req.body;
    try {
        new Post({
            title, description, author,
            text: markdown.render(text)
        }).save();
    } catch (e) {
        throw e;
    }
    res.redirect('/');
})

module.exports = router;