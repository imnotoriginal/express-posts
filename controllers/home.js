const express = require('express');
const Post = require('../models/Post');
const config = require("../config");

const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await Post.getAll(config.limit);
    res.render('home', {
        headTitle: 'Open blog',
        headDescription: 'Open blog website. Check out interesting posts here!',
        posts,
        activePageHome: true,
        noPosts: posts.length === 0
    });
});

module.exports = router;