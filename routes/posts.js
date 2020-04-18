/*jshint esversion: 8 */

const express = require("express");
const router = express.Router();
const Timetable = require("../models/Timetable");

const someArray= [];

//Routes targeting all users
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

router.get("/:personName", function(req,res){
  Timetable.findOne({name : req.params.personName}, function(err, foundName){
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
 
//Routes targeting specific user
router.put("/:personName",function(req,res){
  Timetable.update(
      {name : req.params.personName},
      {status: req.body.status , name : req.body.name , regNo : req.body.regNo, monday: req.body.monday , tuesday: req.body.tuesday , wednesday: req.body.wednesday, thursday: req.body.thursday, friday: req.body.friday},
      {overwrite : true},
      function(err){
        if(!err){
          res.send("Successfully updated using put request");
        }
      }
  );
});

router.patch("/:personName", function(req,res){
  Timetable.update(
    {name : req.params.personName},
    {$set : req.body},
    function(err){
      if(!err){
        res.send("Updated using patch request");
      }else{
        res.send(err);
      }
    });
});

router.delete("/:personName",function(req,res){
  Timetable.deleteOne(
    {name : req.params.personName},
  function(err){
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