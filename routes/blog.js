const express = require('express');

const router = express.Router();
const BlogSummary = require('../models/BlogSummary')

/* /blog */
router.get('/', async (req, res) => {
  const blogSummaries = await BlogSummary.find({})
  res.send(blogSummaries)
});

router.get('/view/:id', function(req, res, next){
  BlogSummary.findById(req.params.id, function(err, BlogSummary){
    if (err) console.log(err);
    var data = {
      username: BlogSummary.username,
      title: BlogSummary.title,
      dayUpload: BlogSummary.dayUpload,
      readingTimeNeed: BlogSummary.readingTimeNeed,
      title: BlogSummary.title,
      content: BlogSummary.content,
      likeCount: BlogSummary.likeCount,
      commentCount: BlogSummary.commentCount
  }
    res.json(data) 
    
  })
})

router.put('/update/:id', function(req, res, next){
  var data = {
    username: req.body.username,
    title: req.body.title,
    dayUpload: req.body.dayUpload,
    readingTimeNeed: req.body.readingTimeNeed,
    title: req.body.title,
    summary: req.body.summary,
    content: req.body.content,
    likeCount: req.body.likeCount,
    commentCount: req.body.commentCount
}
  BlogSummary.findByIdAndUpdate(req.params.id, data, function(err, BlogSummary){
    if (err) return next(err);
    res.json(BlogSummary)
  })
})

// Delete Blog
router.delete('/delete/:id', function(req,res,next){
  BlogSummary.findByIdAndRemove(req.params.id, function (err, BlogSummary ) {
    if (err) console.log(err);
    res.json(BlogSummary)
   });
})

router.post('/create', async (req,res) => {
  const blogSummary = new BlogSummary({
    username: req.body.username,
    title: req.body.title,
    dayUpload: req.body.dayUpload,
    readingTimeNeed: req.body.readingTimeNeed,
    title: req.body.title,
    summary: req.body.summary,
    content: req.body.content,
    likeCount: req.body.likeCount,
    commentCount: req.body.commentCount  
  })
  try {
    const newBlogSummary = await blogSummary.save();
    res.status(201).json({ newBlogSummar: newBlogSummary });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})

module.exports = router;