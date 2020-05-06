const express = require('express');
const markdown = require('markdown-it')();
const Post = require('../models/Post');

const router = express.Router();

router.get('/add-post', (req, res) => {
    res.render('addPost', { activePageAddPost: true });
});

router.post('/add-post', (req, res) => {
    const { title, description, author, text } = req.body;
    Post.add({
        title, description, author, text: markdown.render(text)
    })
    res.redirect('/');
})

module.exports = router;