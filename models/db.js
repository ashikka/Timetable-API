/*jshint esversion: 8 */

const mongoose = require("mongoose");


const timetableSchema = new mongoose.Schema({
  name : String,
  monday : Array,
  tuesday : Array,
  wednesday : Array,
  thursday : Array,
  friday : Array
});

var userSchema = new mongoose.Schema({
  regno: String,
  name : String,
  year : String,
  phoneNo : String,
  email : String,
});

module.exports ={Timetable: mongoose.model('Timetable', timetableSchema), User: mongoose.model('User', userSchema)};