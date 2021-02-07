const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const menuRouter = require('./routes/menuRouter');

const app = express();
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/menu/', menuRouter);

app.post('/order', (req, res) => {
  res.status(500).json({
    status: 'server error',
    message: `this route isn't ready yet`,
  });
});

module.exports = app;
