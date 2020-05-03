/* eslint-disable linebreak-style */

require('dotenv').config();
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Import routes from user.js
const postUser = require('./routes/user');

app.use('/user', postUser);

// Import routes from timetable.js
const postTimetable = require('./routes/timetable');

app.use('/timetable', postTimetable);

// Database
mongoose.connect('mongodb://localhost:27017/timeDB', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  // eslint-disable-next-line no-console
  console.log('Connected to DB');
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
