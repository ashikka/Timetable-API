/*jshint esversion: 8 */

const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema({
  monday : Array,
  tuesday : Array,
  wednesday : Array,
  thursday : Array,
  friday : Array
})

const userSchema = new mongoose.Schema({
  regNo: {type:String, required:true},
  name : String,
  year : String,
  phoneNo : String,
  email : String,
  timetable : timetableSchema

});


module.exports ={Timetable: mongoose.model('Timetable', timetableSchema), User: mongoose.model('User', userSchema)};