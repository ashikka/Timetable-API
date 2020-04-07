const router = require("express")();

router.get("/timetable", function (req, res) {
  console.log("Route for accepting timetables");
  console.log(req.body);
});
