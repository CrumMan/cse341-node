const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1')
app.get('/', lesson1Controller.ChooseRoute);
app.get('/Myself', lesson1Controller.MyRoute);
app.get('/MyWife', lesson1Controller.MyWifeRoute)
const port = 3000;
app.listen(process.env.PORT || port);
console.log('Web Server is listening at port ' + (process.env.port || port))