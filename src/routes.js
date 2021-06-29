const express = require('express');

const route = express.Router()

route.get('/', (require, response) => response.render('index'))

module.exports = route;