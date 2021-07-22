const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.DB_URL;

const connect = () => {
  mongoose
    .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
      console.log('Connected to the database');
    })
    .catch(error => {
      console.log('A problem occurred while connecting to the database', error);
    });
};

module.exports = {
  DB_URL,
  connect,
};
