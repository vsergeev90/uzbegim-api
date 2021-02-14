const server = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

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
    returnOriginal: false,
  })
  .then(() => console.log('Connected to database'));

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
