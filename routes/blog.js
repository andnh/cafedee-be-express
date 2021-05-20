const express = require('express');

const router = express.Router();
const BlogSummary = require('../models/BlogSummary')


/* /blog */
router.get('/', async (req, res) => {
  const blogSummaries = await BlogSummary.find({})
  res.send(blogSummaries)
});
router.get('/view/', function (req, res, next) {
  BlogSummary.findById(req.query.id, function (err, BlogSummary) {
    if (err) console.log(err);
    var data = {
      username: BlogSummary.username,
      title: BlogSummary.title,
      dayUpload: BlogSummary.dayUpload,
      readingTimeNeed: BlogSummary.readingTimeNeed,
      title: BlogSummary.title,
      content: BlogSummary.content,
      imgUrl: BlogSummary.imgUrl,
      likeCount: BlogSummary.likeCount,
      commentCount: BlogSummary.commentCount,
      tag: BlogSummary.tag,
      category: BlogSummary.category,

      commentUsername: BlogSummary.commentUsername,
      commentContent: BlogSummary.commentContent,
    }
    res.json(data)

  })
})

router.get('/viewbytag/', function (req, res, next) {
  BlogSummary.find({ tag: req.query.tag }, function (err, BlogSummaries) {
    if (err) console.log(err);
    console.log(BlogSummaries)
   // 
    var a =JSON.parse(JSON.stringify(BlogSummaries))
    // a.delete.summary
    res.json(a)
    
  }
  )

})

router.get('/viewbycategory/', function (req, res, next) {
  BlogSummary.find({ category: req.query.category }, function (err, BlogSummaries) {
    if (err) console.log(err);
    console.log(BlogSummaries)
   // 
    var a =JSON.parse(JSON.stringify(BlogSummaries))
    // a.delete.summary
    res.json(a)
    
  }
  )

})



router.put('/update/', function (req, res, next) {
  var data = {
    username: req.body.username,
    title: req.body.title,
    dayUpload: req.body.dayUpload,
    readingTimeNeed: req.body.readingTimeNeed,
    title: req.body.title,
    summary: req.body.summary,
    content: req.body.content,

    imgUrl: req.body.imgUrl,
    likeCount: req.body.likeCount,
    commentCount: req.body.commentCount,
    tag: req.body.tag,
    category: req.body.category,

    commentUsername: req.body.commentUsername,
    commentContent: req.body.commentContent,
  }
  BlogSummary.findByIdAndUpdate(req.query.id, data, function (err, BlogSummary) {
    if (err) return next(err);
    res.json(BlogSummary)
  })
})

// Delete Blog
router.delete('/delete/', function (req, res, next) {
  BlogSummary.findByIdAndRemove(req.query.id, function (err, BlogSummary) {
    if (err) console.log(err);
     res.json(BlogSummary)
  });
})

router.post('/create', async (req, res) => {
  const blogSummary = new BlogSummary({
    username: req.body.username,
    title: req.body.title,
    dayUpload: req.body.dayUpload,
    readingTimeNeed: req.body.readingTimeNeed,
    title: req.body.title,
    summary: req.body.summary,
    content: req.body.content,
    imgUrl: req.body.imgUrl,
    likeCount: req.body.likeCount,
    commentCount: req.body.commentCount,
    tag: req.body.tag,
    category: req.body.category,

    commentUsername: req.body.commentUsername,
    commentContent: req.body.commentContent,
  })
  try {
    const newBlogSummary = await blogSummary.save();
    res.status(201).json({ newBlogSummar: newBlogSummary });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})

module.exports = router;