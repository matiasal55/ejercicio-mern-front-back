const express = require('express');
const logger = require('morgan');

const postsRouter = require('./routes/posts.routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/posts', postsRouter);

app.use((req, res) => {
    res.status(400).json({ message: 'Bad request' });
});

module.exports = app;
