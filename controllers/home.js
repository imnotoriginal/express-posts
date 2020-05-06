const router = require('express').Router(),
    Post = require('../models/Post');

router.get('/', async (req, res) => {
    const posts = await Post.getAll();
    res.render('home', {
        headTitle: 'Open blog',
        headDescription: 'Open blog website. Check out interesting posts here!',
        posts,
        activePageHome: true,
        noPosts: posts.length === 0
    });
});

module.exports = router;