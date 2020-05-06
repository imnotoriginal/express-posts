const router = require('express').Router();
const Post = require('../models/Post');

router.get('/post/:id', async (req, res) => {
    const { id } = req.params,
        post = await Post.findById(id).catch(next).lean();
    !post && res.end(404, 'Post has not been found');

    res.render('post', {
        headTitle: post.title,
        headDescription: post.description,
        post
    });
});

module.exports = router;