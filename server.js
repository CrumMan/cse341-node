const express = require('express');
const app = express();
 
app.get('/MyWife', (req, res) => {
  res.send("Meissa Pyle");
});
app.get('/Myself', (req, res) => {
  res.send("JT Pyle");
});
const port = 3000;
app.listen(process.env.PORT || port);
console.log('Web Server is listening at port ' + (process.env.port || port))