const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

router.get('/post/:id', async (req, res) => {
    const post = await Post.find(parseInt(req.params.id));
    res.render('post', {
        headTitle: post.title,
        headDescription: post.description,
        post
    });
});

module.exports = router;