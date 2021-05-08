const express = require('express');

const router = express.Router();
const BlogSummary = require('../models/BlogSummary')

/* /blog */
router.get('/', async (req, res) => {
  const blogSummaries = await BlogSummary.find({})
  res.send(blogSummaries)
});


router.post('/update', async (req,res) => {
  const blogSummary = new BlogSummary({
    username: req.body.username,
    title: req.body.title
  })
  try {
    const newBlogSummary = await blogSummary.save();
    res.status(201).json({ newBlogSummar: newBlogSummary });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})

module.exports = router;