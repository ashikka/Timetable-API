/*jshint esversion: 6 */
const router = require("express").Router();
const controller = require('../controllers/controller')


router.get("/", (req, res) => {
  console.log("Root Route Hit");
  controller.demoController(req)
    .then(resp => res.status(200).send(resp))
    .catch(err => res.status(400).send(err))

});

module.exports = router;
