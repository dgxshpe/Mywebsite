// server/index.js
const express = require('express');
const apiRouter = require('./api');

const app = express();

app.use('/api', apiRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});