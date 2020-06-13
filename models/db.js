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
  regNo: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  year: { type: Number, required: true },
  phoneNo: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  timetable: { type: [timetableSchema], required: true },

});

module.exports = { Timetable: mongoose.model('Timetable', timetableSchema), User: mongoose.model('User', userSchema) };
