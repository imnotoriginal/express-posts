const router = require('express').Router(),
    Post = require('../models/Post'),
    safeQuery = require('../utils/safeQuery');

router.get('/post/:id', async (req, res, next) => {
    const { id } = req.params;
    const post = await safeQuery.async(next, async () => await Post.findById(id).lean());

    res.render('post', {
        headTitle: post.title,
        headDescription: post.description,
        post
    });
});

module.exports = router;