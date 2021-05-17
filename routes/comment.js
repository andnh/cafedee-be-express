const express = require('express');

const router = express.Router();
const Comment = require('../models/Comment')


// router.get('/', async (req, res) => {
//   const comment = await Comment.find({})
//   res.send(comment)
// });

router.get('/comment/:id', function(req, res, next){
  Comment.findById(req.params.id, function(err, Comment){
    if (err) console.log(err);
    var data = {
      username: Comment.username,
      content: Comment.content
  }
    res.json(data) 
    
  })
})

router.put('/editcomment/:id', function(req, res, next){
  var data = {
    username: req.body.username,
    content: req.body.content
}
  Comment.findByIdAndUpdate(req.params.id, data, function(err, Comment){
    if (err) return next(err);
    res.json(Comment)
  })
})

// Delete Comment
router.delete('/deletecomment/:id', function(req,res,next){
  Comment.findByIdAndRemove(req.params.id, function (err, Comment ) {
    if (err) console.log(err);
    res.json(Comment)
   });
})

router.post('/createcomment', async (req,res) => {
  const comment = new Comment({
    username: req.body.username,
    content: req.body.conten
  })
  try {
    const newComment = await comment.save();
    res.status(201).json({ newComment: newComment });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})

module.exports = router;