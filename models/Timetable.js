/*jshint esversion: 8 */

const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema({
  status : Number,
  name : String,
  regNo : String,
  monday : Array,
  tuesday : Array,
  wednesday : Array,
  thursday : Array,
  friday : Array
});

module.exports = mongoose.model("Timetable",timetableSchema);