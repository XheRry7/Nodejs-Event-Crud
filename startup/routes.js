const Events = require('../routes/Event');
const express = require('express');

module.exports = function (app) {
  app.use(express.json())
  app.use('/api', Events);
}