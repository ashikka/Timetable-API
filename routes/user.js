/* eslint-disable linebreak-style */


const express = require('express');

const router = express.Router();
const { User } = require('../models/db');


router.post('/create', async (req, res) => {
  const user = new User({
    regNo: req.body.regNo,
    name: req.body.name,
    year: req.body.year,
    phoneNo: req.body.phoneNo,
    email: req.body.email,
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/find', async (req, res) => {
  const { person } = req.body;
  const foundUser = await User.findOne({ name: person });
  if (!foundUser) {
    res.send('User not found');
    return;
  }
  res.send(foundUser);
});

router.patch('/patch', async (req, res) => {
  const { person } = req.body;
  const foundUser = await User.updateOne(
    { name: person },
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

router.delete('/delete', (req, res) => {
  const { person } = req.body;
  User.deleteOne(
    { user: person },
    (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send('deleted');
      }
    },
  );
});

module.exports = router;
