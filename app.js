/*jshint esversion: 8 */
require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


app.use(bodyParser.json());
  

//Import routes
 const postRoute = require("./routes/posts");
 app.use("/timetable", postRoute);

 //Database
mongoose.connect('mongodb://localhost:27017/timeDB', {useNewUrlParser: true, useUnifiedTopology: true},function(){
  console.log("Connected to DB");
});


 app.listen(3000,function(){
   console.log("Listening on port 3000");
 });