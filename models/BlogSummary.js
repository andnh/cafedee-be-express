const mongoose = require('mongoose')

const BlogSummarySchema = mongoose.Schema({
  // avatar: String,

  username: {
    type: String,
    required: true
  },
  dayUpload: String,
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
  content: {
    type: String,
    require: true
  },
  imgUrl : String,
  likeCount: Number,
  commentCount: Number,

    
  
})

const BlogSummary = mongoose.model('BlogSummary', BlogSummarySchema)

module.exports = BlogSummary