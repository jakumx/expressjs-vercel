const app = require('../app');
const usersRouter = require('../routes/users');

app.use('/api/users', usersRouter);

module.exports = app;