// routes/exercises.routes.js
 
const router = require("express").Router();
 
 const mongoose = require('mongoose');
 
const Exercises = require('../models/Exercises.model');


router.get('/exercises', (req,res,next) => {
Exercises.find()
.then(exercisesFromDB => res.json(exercisesFromDB))
.catch(err => res.json(err));

});

 
module.exports = router;