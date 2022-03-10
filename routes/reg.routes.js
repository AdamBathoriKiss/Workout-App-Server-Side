
const express = require("express");

const Workouts = require("../models/Workouts.model");
 
const router = express.Router();

const Exercises = require("../models/Exercises.model");
 
router.post('api/register', (req, res, next) => {
    const { nameOfWorkout } = req.body;
  
    
    if (nameOfWorkout === '') {
      res.status(400).json({ message: "Provide email, password and name" });
      return;
    }
 
  
    
     Workouts.findOne({ nameOfWorkout })
        .then((foundWorkout) => {
       
         if (foundWorkout) {
           res.status(400).json({ message: "Workout already exists." });
           return;
         } 
  
        return Workouts.create({ nameOfWorkout });
        
      });
   
    
    });

    router.get('/register', (req,res,next) => {
      Workouts.find()
      .then(workoutsFromDb => res.json(workoutsFromDb))
      .catch(err => res.json(err));
      
      });

      router.get('/register/:workoutId', (req,res,next) => {
        
        Workouts.findById(req.params.workoutId)
        .then(workoutsFromDb => res.json(workoutsFromDb))
        .catch(err => res.json(err));
        
        });
  


      router.delete('/register/:workoutId', (req,res) => {
     
          Workouts.findByIdAndRemove(req.params.workoutId)
          .then(() => res.json(`Workout deleted! Check the full characters list to test`))
          .catch(error => console.log(error));
      });
      
    
  module.exports = router;
