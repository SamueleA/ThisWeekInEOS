const express = require('express');
const path = require('path');
const port = 80;
const app = express();

app.use(express.static(__dirname));

app.get('*',(req, res)=>{
  res.sendFile(path.resolve(__dirname, 'client/index.html'));
});

app.listen(port, '0.0.0.0', ()=>{
  console.log(`Server started on ${port}`)
});
