const express = require("express");

const app = express();

const port = 5000;

app.get('/posts/date', (req, res)=>{
  const testing = ':D'
  res.json(testing);
});

app.listen(port, ()=>{console.log(`Server started on port ${port}`)});
