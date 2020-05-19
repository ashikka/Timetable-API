/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();
const { User } = require('../models/db');


router.post('/find', async (req, res) => {
  const availablePeopleArray = [];

  User.find({}, (err, docs) => {
    if (err) {
      console.log(err);
      return;
    }
    docs.forEach((doc) => {
      doc.timetable.forEach((index) => {

        const specifiedDay = req.body;
        if (specifiedDay.day === 'monday') {
          index.monday.forEach((i) => {
            const specifiedPeriod = req.body;
            if (i.period == specifiedPeriod.period) {
              if (i.free === true) {
                availablePeopleArray.push(doc.name);
              }
            }
          });
        }
        if (specifiedDay.day === 'monday') {
          index.monday.forEach((i) => {
            const specifiedPeriod = req.body;
            if (i.period == specifiedPeriod.period) {
              if (i.free === true) {
                availablePeopleArray.push(doc.name);
              }
            }
          });
        } if (specifiedDay.day === 'tuesday') {
          index.monday.forEach((i) => {
            const specifiedPeriod = req.body;
            if (i.period == specifiedPeriod.period) {
              if (i.free === true) {
                availablePeopleArray.push(doc.name);
              }
            }
          });
        } if (specifiedDay.day === 'wednesday') {
          index.monday.forEach((i) => {
            const specifiedPeriod = req.body;
            if (i.period == specifiedPeriod.period) {
              if (i.free === true) {
                availablePeopleArray.push(doc.name);
              }
            }
          });
        } if (specifiedDay.day === 'thursday') {
          index.monday.forEach((i) => {
            const specifiedPeriod = req.body;
            if (i.period == specifiedPeriod.period) {
              if (i.free === true) {
                availablePeopleArray.push(doc.name);
              }
            }
          });
        }
        if (specifiedDay.day === 'friday') {
          index.monday.forEach((i) => {
            const specifiedPeriod = req.body;
            if (i.period == specifiedPeriod.period) {
              if (i.free === true) {
                availablePeopleArray.push(doc.name);
              }
            }
          });
        }
      });
    });
    res.send(availablePeopleArray);
  });
});

module.exports = router;
