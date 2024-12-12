// server/middleware.js
const express = require('express');
const path = require('path');

module.exports = {
  staticMiddleware: (req, res, next) => {
    app.use(express.static(path.join(__dirname, '..', 'public')));
    next();
  }
};