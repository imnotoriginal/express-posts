const router = require('express').Router(),
    Post = require('../models/Post'),
    safeQuery = require('../utils/safeQuery');

router.get('/', async (req, res, next) => {
    const { limit } = req.query;
    res.set('x-total-count', await Post.countDocuments().catch(e => next(e)));

    const posts = await safeQuery.async(next, async () =>
        await Post
            .find()
            .sort({ createDate: -1 })
            .limit(+limit)
            .lean()
    );

    res.render('home', {
        headTitle: 'Open blog',
        headDescription: 'Open blog website. Check out interesting posts here!',
        posts,
        activePageHome: true,
        noPosts: posts.length === 0
    });
});

module.exports = router;