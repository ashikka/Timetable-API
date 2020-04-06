
/*jshint esversion: 6 */
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/timetable", function(req,res){
  console.log("Route for accepting timetables");
});


app.listen(3000,function(){
  console.log("Listening on port 3000");
});