const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const server = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to database'));

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
