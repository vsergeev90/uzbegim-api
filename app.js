const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dishesRouter = require('./routes/dishesRouter');
const orderRouter = require('./routes/orderRouter');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/menu/', dishesRouter);
app.use('/api/v1/order', orderRouter);

app.all('*', (req, res, next) => {
  const err = `Can't find ${req.originalUrl} on this server!`;
  err.statusCode = 404;
  err.status = 'fail';

  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
