/*jshint esversion: 8 */

const express = require("express");
const router = express.Router();
const Timetable = require("../models/Timetable");

router.get("/", function(req,res){
  res.send("Hey");
});

router.post("/", async function(req,res){
  const timetable = new Timetable({
    status : req.body.status,
    name : req.body.name,
    regNo : req.body.regNo,
    monday : req.body.monday,
    tuesday : req.body.tuesday,
    wednesday : req.body.wednesday,
    thursday: req.body.thursday,
    friday : req.body.friday
  });
  try{
  const savedTimetable = await  timetable.save();
  res.json(savedTimetable);
  } catch(err){
    res.json({message : err});
  }
});

module.exports = router;