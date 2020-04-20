/*jshint esversion: 8 */

const express = require("express");
const router = express.Router();
const Timetable = require("../models/Timetable");

const someArray= [];

//Routes targeting all users
router.post("/create", async (req,res) =>{
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

//Routes targeting specific user

router.post("/freeslots/:personName", (req,res) =>{
  Timetable.findOne({name : req.params.personName}, (err, foundName) =>{
    if(foundName){
      // foundName.monday.forEach(element => {
      //   Object.keys(element).forEach((el) =>{
      //     if(element[el].free === true)
      //     {
      //       someArray.push(el);
      //     }
      //   });
      //   res.send(someArray);
      // });
      res.send(foundName);
    }else{
      res.send(err);
    }
  });
});
 
router.put("/put/:personName", (req,res) =>{
  Timetable.update(
      {name : req.params.personName},
      {status: req.body.status , name : req.body.name , regNo : req.body.regNo, monday: req.body.monday , tuesday: req.body.tuesday , wednesday: req.body.wednesday, thursday: req.body.thursday, friday: req.body.friday},
      {overwrite : true},
      (err) =>{
        if(!err){
          res.send("Successfully updated using put request");
        }
      }
  );
});

router.patch("/patch/:personName", (req,res) =>{
  Timetable.update(
    {name : req.params.personName},
    {$set : req.body},
    (err) =>{
      if(!err){
        res.send("Updated using patch request");
      }else{
        res.send(err);
      }
    });
});

router.delete("/delete/:personName", (req,res) =>{
  Timetable.deleteOne(
    {name : req.params.personName},
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