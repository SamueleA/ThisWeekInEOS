//initialising mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection established with database!');
});

const express = require("express");

const app = express();

//bring mongoose models
let Post = require('./models/articles');

const port = 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/posts', (req, res)=>{
  let date = req.query.date;
  if (date == undefined) {
    Post.find({}).sort({date:-1}).exec((err, articles)=>{
      if (err) {
        console.log(err);
      } else {
        res.json(articles);
      }
    });
  } else {
    Post.find({date:{$eq:date}}, (err, articles)=>{
      if (err) {
        console.log(err);
      } else {
        res.json(articles);
      }
    });
  }

});

app.listen(port, ()=>{console.log(`Server started on port ${port}`)});
