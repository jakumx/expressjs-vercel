const app = require('../app');

var indexRouter = require('../routes/index');
app.use('/', indexRouter);

module.exports = app;