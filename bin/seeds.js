// bin/seeds.js

const mongoose = require('mongoose');
const Exercises = require('../models/Exercises.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/workoutapp-server';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
});

const exercises = [
    {
      nameOfExercise: "Bench press",
      description:
        "The Bench press is one of the basic exercises if you want to build big chest.",
      category: "Chest",
      isSelected: false,
    },
    {
        nameOfExercise: "Pushups",
        description:
          "Traditional pushups are beneficial for building upper body strength.",
        category: "Chest",
        isSelected: false,
    },
    {
        nameOfExercise: "Chest Dip",
        description:
          "The dip is an exercise that primarily targets your chest but it also activates the shoulders, triceps, and abdominals",
        category: "Chest",
        isSelected: false,
    },
    {
        nameOfExercise: "Resistance band pullover",
        description:
          "The resistance band row is a great assistance exercise for chest workouts as it reinforces proper back positioning, builds back strength, and can help stabilize the shoulders during chest workouts.",
        category: "Chest",
        isSelected: false,
    },

    {
        nameOfExercise: "Pull up",
        description:
          "Pullups use your lats and biceps primarily, while also recruiting your deltoids, rhomboids, and core. These are the muscles you'll need to strengthen.",
        category: "Back",
        isSelected: false,
    },
    {
        nameOfExercise: "Deadlift",
        description:
          "Deadlifting can increase core strength, core stability and improve your posture.",
        category: "Back",
        isSelected: false,
    },
    {
        nameOfExercise: "Lat Pulldown",
        description:
          "The lats, also known as the back muscles, are the primary mover in the lat pulldown.",
        category: "Back",
        isSelected: false,
    },
    {
        nameOfExercise: "Inverted Row",
        description:
          "Overall, they can improve upper body strength and grip strength, recruit the glutes and hamstrings, and give your biceps a boost.",
        category: "Back",
        isSelected: false,
    },

    {
        nameOfExercise: "Chin ups",
        description:
          "The primary benefits of the chin-up are increasing strength and definition of the upper arms, specifically the biceps, the posterior deltoids of the shoulders and the teres major and latissimus dorsi muscles of the back.",
        category: "Biceps",
        isSelected: false,
    },
    {
        nameOfExercise: "Hammer Curl",
        description:
          "Hammer curls target the long head of the bicep as well as the brachialis (another muscle in the upper arm) and the brachioradialis (one of the key forearm muscles).",
        category: "Biceps",
        isSelected: false,
    },
    {
        nameOfExercise: "Cable Curl",
        description:
          "The cable curl primarily works the biceps brachii, which is the two-headed muscle on the front of your arm that merges into one muscle belly near the elbow. ",
        category: "Biceps",
        isSelected: false,
    },
    {
        nameOfExercise: "Barbell Curl",
        description:
          "The barbell curl targets your biceps brachii muscle as well as the brachialis, a muscle responsible for elbow flexion.",
        category: "Biceps",
        isSelected: false,
    },



    {   nameOfExercise: "Tricep Dips",
        description:
          "Tricep dips work the muscles in the upper arm, specifically the triceps, and are one of the best exercises for toning the arms.",
        category: "Triceps",
        isSelected: false,
    },
    {
        nameOfExercise: "Diamond Push-ups",
        description:
          "In a classic push-up, there is greater activation of the pectoralis muscles than the triceps brachii. However, studies have found that diamond push-ups lead to an increase in activation of both triceps and pectoralis muscles in contrast to that seen in a classic push-up.",
        category: "Triceps",
        isSelected: false,
    },
    {
        nameOfExercise: "Rope Pushdowns",
        description:
          "Rope pressdowns are more effective than v bar pressdowns for building proportional triceps because bar attachments are fixed, whereas both sides of the rope can move independently. As such, whenever you do pushdowns with any kind of bar, there's always a good chance that your stronger arm will dominate the movement. ",
        category: "Triceps",
        isSelected: false,
    },

    {
        nameOfExercise: "Overhead Triceps Extensions",
        description:
          "Overhead tricep extensions focus specifically on the long head of the triceps. Difficulty level: The overhead tricep extension activates your core, glutes, and lower back muscles as stabilizers during the movement.",
        category: "Triceps",
        isSelected: false,
    },



    {   nameOfExercise: "Overhead Press",
    description:
      "The overhead press is big compound lift that's great for working our shoulders. It works our front delts and side delts, making our shoulders both bigger and broader. But many different muscles are worked hard enough to stimulate muscle growth, including our traps, abs, and triceps.",
    category: "Shoulders",
    isSelected: false,
},
{
    nameOfExercise: "Lateral Raise",
    description:
      "A lateral raise works your shoulder muscles as well as your triceps. To do this exercise: Stand or sit with your arms at your sides and a dumbbell in each hand. With your palms facing in toward your body and your elbows slightly bent, raise the dumbbells so your arms are parallel to the floor.",
    category: "Shoulders",
    isSelected: false,
},
{
    nameOfExercise: "Incline Bench Press",
    description:
      "The incline bench press – sometimes referred to as an incline dumbbell press – is a shoulder exercise that’s the cornerstone to any solid shoulder workout, targeting your upper pecs.  ",
    category: "Shoulders",
    isSelected: false,
},
{
    nameOfExercise: "Cable Face Pulls",
    description:
      "Cable face pulls target your lateral and posterior deltoids, teres minors, trapezius, and more.",
    category: "Shoulders",
    isSelected: false,
},

{   nameOfExercise: "Back squat",
description:
  "Target your posterior chain — or the back of your body, including the glutes and hamstrings — with a back squat.",
category: "Legs",
isSelected: false,
},
{
nameOfExercise: "Romanian deadlift",
description:
  "Build your glutes, hamstrings, and calves, as well as mobility in your hips, with a Romanian deadlift.",
category: "Legs",
isSelected: false,
},
{
nameOfExercise: "Leg press",
description:
  "While machines lack some of the benefits of free-weight exercises, machines like the leg press allow you to isolate specific muscles easily — in this case, the quads, hamstrings, and glutes.",
category: "Legs",
isSelected: false,
},
{
nameOfExercise: "Bulgarian split squat",
description:
  "Work your legs and core with the Bulgarian split squat.",
category: "Legs",
isSelected: false,
},


{   nameOfExercise: "Hanging knee raise",
description:
  "These hanging knee raises work your full tranversus abdomininis. These are the muscles that hold your stomach tight and flat.",
category: "Abs",
isSelected: false,
},
{
nameOfExercise: "Ab rollout",
description:
  "The ab rollout is an exercise designed to target the core muscles, including the rectus abdominis, obliques, and erector spinae (lower back). It also targets the latissimus dorsi (upper back) and shoulder muscles.",
category: "Abs",
isSelected: false,
},
{
nameOfExercise: "Oblique crunch",
description:
  "This move strictly engages your internal and external obliques. Your obliques are the diagonal fibers that fan out from your pelvis to your ribs.",
category: "Abs",
isSelected: false,
},
{
nameOfExercise: "Plank",
description:
  "The plank is a classic exercise that strengthens your body from head to toe. In particular, the plank helps strengthen your core muscles, including your abdominals and lower back. Having a strong core is linked to reduced lower back pain, an improved ability to perform daily tasks, and enhanced athletic performance.",
category: "Abs",
isSelected: false,
}

  ];

Exercises.create(exercises)
  .then(exercisesFromDB => {
    console.log(`Created ${exercisesFromDB.length} exercises`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));
