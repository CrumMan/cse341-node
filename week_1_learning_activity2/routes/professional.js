const express = require('express');
const router = express.Router();

const controller = require('../controllers/lesson1')

router.get('/', controller.getAll);

module.exports = router