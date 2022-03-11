
const express = require("express");

const Workouts = require("../models/Workouts.model");
 
const router = express.Router();

const Exercises = require("../models/Exercises.model");
 
router.post('/register', (req, res, next) => {
    const { nameOfWorkout, exercises, numberOfReps, sets } = req.body;
  
    
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
  
        return Workouts.create({ nameOfWorkout, exercises, numberOfReps, sets });
        
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

      router.put('/register/:workoutId', (req, res, next) => {
        const  {workoutId}  = req.params;
       
        if (!mongoose.Types.ObjectId.isValid(workoutId)) {
          res.status(400).json({ message: 'Specified id is not valid' });
          return;
        }
       
        Workouts.findByIdAndUpdate(workoutId, req.body, { new: true })
          .then((updatedWorkout) => res.json(updatedWorkout))
          .catch(error => res.json(error));
      });
      
    
  module.exports = router;
