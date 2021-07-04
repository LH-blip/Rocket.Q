const express = require('express');

const route = express.Router();

route.get('/', (require, response) => response.render('index'))
route.get('/room', (req, res) => res.render('room'));
route.get('/create-pass', (req, res) => res.render('create-pass'));

module.exports = route;