// server/api.js
const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/', (req, res) => {
    // ...
});

module.exports = router;