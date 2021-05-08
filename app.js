const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')


//Import routes
const getBlog = require('./routes/blog');
const getHome = require('./routes/home');


//Middlewares
app.use('/', getHome)
app.use('/blog', getBlog)


// Connect to DB

const uri = process.env.DB_CONNECTION;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("Connected to DB")
});

//Start listening to the server
app.listen(8080, () => {
  console.log("App is listening on port 8080 ")
})