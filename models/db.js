/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  monday: { $type: Array },
  tuesday: { $type: Array },
  wednesday: { $type: Array },
  thursday: { $type: Array },
  friday: { $type: Array },
}, { typeKey: '$type' });


const userSchema = new mongoose.Schema({
  regNo: { type: String, required: true },
  name: String,
  year: String,
  phoneNo: String,
  email: String,
  timetable: [timetableSchema],

});

module.exports = { Timetable: mongoose.model('Timetable', timetableSchema), User: mongoose.model('User', userSchema) };
