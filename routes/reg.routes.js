
const express = require("express");

const Workouts = require("../models/Workouts.model");
 
const router = express.Router();

 
router.post('/register', (req, res, next) => {
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

      router.get('/delete/:id', (req, res) => {
        const characterId = req.params.id;
       
        charactersApiHandler
          .deleteCharacter(characterId)
          .then(() => res.send(`Character deleted! Check the full characters list to test`))
          .catch(error => console.log(error));
      });
      
    
  module.exports = router;
