/*jshint esversion: 8 */

const mongoose = require("mongoose");
const MUUID = require('uuid-mongodb');
const mUUID4 = MUUID.v4();

const timetableSchema = new mongoose.Schema({
  _id: {
    type: 'object',
    value: { type: 'Buffer' },
    default: () => MUUID.v1(),
  },
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