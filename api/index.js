const app = require('../app');

var indexRouter = require('../routes/index');
app.use('/api/', indexRouter);

module.exports = app;