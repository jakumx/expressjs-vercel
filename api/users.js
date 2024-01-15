const app = require('../app');
const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

module.exports = app;