// server/api.js
const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/', (req, res) => {
    // ...
});
router.get('/posts', async (req, res) => {
    const posts = await db.Post.find().exec();
    res.json(posts);
});
  
router.post('/posts', async (req, res) => {
    const post = new db.Post(req.body);
    await post.save();
    res.json(post);
});

module.exports = router;