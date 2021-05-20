const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')


//Import routes
const getBlog = require('./routes/blog');
const getHome = require('./routes/home');
const getComment = require('./routes/comment');

//Middlewares
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use('/', getHome)
app.use('/blog', getBlog)
app.use('/comment', getComment)


// Connect to DB

const uri = process.env.DB_CONNECTION;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to cafedee database")
  })
  .catch(err => {
    console.log("ERR:")
    console.log(err)
  })

//Start listening to the server
app.listen(8080, () => {
  console.log("App is listening on port 8080 ")
})