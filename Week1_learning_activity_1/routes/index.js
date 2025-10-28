const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1')

routes.get('/', lesson1Controller.ChooseRoute);
routes.get('/Myself', lesson1Controller.MyRoute);
routes.get('/MyWife', lesson1Controller.MyWifeRoute)

module.exports = routes;