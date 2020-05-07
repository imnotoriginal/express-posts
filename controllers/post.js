const router = require('express').Router();
const Post = require('../models/Post');

router.get('/post/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        var post = await Post.findById(id).lean();
    } catch (e) {
        next(e);
    }

    res.render('post', {
        headTitle: post.title,
        headDescription: post.description,
        post
    });
});

module.exports = router;