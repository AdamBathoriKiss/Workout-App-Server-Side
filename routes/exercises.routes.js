// routes/exercises.routes.js
 
const router = require("express").Router();
 
 const mongoose = require('mongoose');
 
const Exercises = require('../models/Exercises.model');

 
router.get('/exercises', (req, res, next) => {
  Exercises.find()
    .populate('exercises')
    .then(allExercises => res.json(allExercises))
    .catch(err => res.json(err));
});
 
module.exports = router;