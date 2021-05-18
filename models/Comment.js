const mongoose = require('mongoose')

const CommentSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  content: {
    type: String,   
    require: true
  },
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment