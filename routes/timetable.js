/*jshint esversion: 8 */

const express = require("express");
const router = express.Router();
const {Timetable} = require("../models/db");

const someArray= [];



//Routes targeting all users

router.post("/create", async (req,res) =>{
  const timetable = new Timetable({
    name : req.body.name,
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

//Routes targeting specific user

router.post('/find', async (req, res) => {
  const { person } = req.body;
  const foundUser = await Timetable.findOne({ name: person });
  if (!foundUser) {
      res.send("User not found");
      return;
  }else{
   res.send(foundUser);
  }
});

router.post("/freeSlots", async(req,res)=>{
  const { person } = req.body;
  const foundUser = await Timetable.findOne({ name: person });
  if (!foundUser) {
      res.send("User not found");
      return;
  }else{
   foundUser.monday.forEach( element => {
     if(element.free == true)
        someArray.push({"monday":{"period":element.period}})
   });
   foundUser.tuesday.forEach( element => {
    if(element.free == true)
       someArray.push({"tuesday":{"period":element.period}})
  });
  foundUser.wednesday.forEach( element => {
    if(element.free == true)
       someArray.push({"wednesday":{"period":element.period}})
  });
  foundUser.thursday.forEach( element => {
    if(element.free == true)
       someArray.push({"thursday":{"period":element.period}})
  });
  foundUser.friday.forEach( element => {
    if(element.free == true)
       someArray.push({"friday":{"period":element.period}})
  });
   res.send(someArray);
  }
});


router.patch("/patch", (req,res) =>{
  const { person } = req.body;
  Timetable.updateOne(
    {user: person},
    {$set : req.body},
    (err) =>{
      if(!err){
        res.send("Updated using patch request");
      }else{
        res.send(err);
      }
    });
});

router.delete("/delete", (req,res) =>{
  const { person } = req.body;
  Timetable.deleteOne(
    {user : person},
  (err)=>{
    if(err){
      res.send(err);
    }
    else{
      res.send("deleted");
    }
  }
  );
});


module.exports = router;