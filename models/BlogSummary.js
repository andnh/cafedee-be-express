const mongoose = require('mongoose')

const BlogSummarySchema = mongoose.Schema({
  // avatar: String,

  username: {
    type: String,
    required: true
  },
  lastActive: String ,
  readingTimeNeed: String,
  // thumbnail: String,
  title: {
    type: String,
    required: true
  }, 
  summary: {
    type: String,
    require: true
  },
  likeCount: Number,
  commentCount: Number,
})

const BlogSummary = mongoose.model('BlogSummary', BlogSummarySchema)

module.exports = BlogSummary