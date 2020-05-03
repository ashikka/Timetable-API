/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable linebreak-style */

const express = require('express');

const router = express.Router();
const { Timetable } = require('../models/db');
const { User } = require('../models/db');

const freeSlotArray = [];
// Routes targeting all users
router.post('/create', async (req, res) => {
  try {
    const { name } = req.body;
    const timetable = new Timetable({
      monday: req.body.monday,
      tuesday: req.body.tuesday,
      wednesday: req.body.wednesday,
      thursday: req.body.thursday,
      friday: req.body.friday,
    });
    const user = await User.findOneAndUpdate({ name }, { $push: { timetable } });
  } catch (err) {
    res.json({ message: err });
    return;
  }
  res.json('done');
});

// Routes targeting specific user

router.post('/find', async (req, res) => {
  const { name } = req.body;
  const foundUser = await User.findOne({ name });
  if (!foundUser) {
    res.send('User not found');
  } else {
    res.send(foundUser.timetable);
  }
});

router.post('/freeSlots', async (req, res) => {
  const { name } = req.body;
  const foundUser = await User.findOne({ name });
  if (!foundUser) {
    res.send('User not found');
  } else {
    foundUser.timetable.forEach((element) => {
      element.monday.forEach((el) => {
        if (el.free == true) freeSlotArray.push(({ monday: { period: el.period } }));
      });
      element.tuesday.forEach((el) => {
        if (el.free == true) freeSlotArray.push({ tuesday: { period: el.period } });
      });
      element.wednesday.forEach((el) => {
        if (el.free == true) freeSlotArray.push({ wednesday: { period: el.period } });
      });
      element.thursday.forEach((el) => {
        if (el.free == true) freeSlotArray.push({ thursday: { period: el.period } });
      });
      element.friday.forEach((el) => {
        if (el.free == true) freeSlotArray.push({ friday: { period: el.period } });
      });
    });
    res.send(freeSlotArray);
  }
});


router.patch('/patch', (req, res) => {
  const { name } = req.body;
  User.updateOne(
    { user: name },
    { $set: req.body },
    (err) => {
      if (!err) {
        res.send('Updated using patch request');
      } else {
        res.send(err);
      }
    },
  );
});

router.delete('/delete', async (req, res) => {
  const { name } = req.body;
  const foundUser = await User.findOne({ name });
  if (!foundUser) {
    res.send('Not found');
  } else {
    res.send('deleted successfully');
  }
});


module.exports = router;
