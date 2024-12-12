// server.js
const express = require('express');
const apiRouter = require('./server/api');
const middleware = require('./middleware');
const db = require('./db');

const app = express();

app.use('/api', apiRouter);
app.use(middleware.staticMiddleware);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});