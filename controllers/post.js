const router = require('express').Router();
const Post = require('../models/Post');

router.get('/post/:id', async (req, res) => {
    const post = await Post.find(parseInt(req.params.id));
    res.render('post', {
        headTitle: post.title,
        headDescription: post.description,
        post
    });
});

module.exports = router;