/*jshint esversion: 6 */
const router = require("express").Router();
router.get("/timetable",function(req,res){
  console.log("hi");
});
router.post("/timetable", function (req, res) {
  let docRef = database.collection('users').doc('alovelace');

  let setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });
});

module.exports = router;