# Workout Application

The site makes possible for users to create their own workout.

---

## FEATURES

- Reach exercises by bodyparts
- Create own workout
- Add exercises to the created bodyparts

---

## LINK

[WorkoutApp](https://ironworkoutapp.netlify.app/)

---

## BUILT WITH

- Express
- mongoose
- MongoDB

## DATA MODELS

- User
- Exercises
- Workouts

## ROUTES

| Method | Route                   | Description                                                                 |
| ------ | ----------------------- | --------------------------------------------------------------------------- |
| POST    | "/api/auth/signup"                     | Register user                                                                   |
| POST    | "api/auth/login"                | Log in user                                                                |
| GET   | "/api/auth/verify"               | Verify JWT token                                                                 |
| GET    | "/api/exercises"                | Retrieve all available Exercises                                                    |
| GET    | "/api/workouts"                | Retrieve all available Workouts                                                    |
| POST   | "/api/workouts"                | Add new workout                                                           |
| GET   | "/api/workouts/:workoutId"               | Retrieve user workouts                                                             |
| PUT    | "/api/workouts/:workoutId"              | Update user workouts                                                |
| DELETE    | "/api/workouts/:workoutId"       | DELETE user workout                                                           |                    |

---

## USER STORIES



- As a user, I would see all of the available exercises for every body part, and create my own workout, using these exercises.
- For reach this level ( to see the exercises and create my own workout) I have to sign up for the site, and login with my credentials.
- After this step, I'll able to create my own workout for example: Chest-Triceps workout, in my workouts page.
- For add a new exercise to my own workout, I have to go to the current Workout page, where I can select and add the exercises to my selected workout ( dropdown menu, because I can create multiple workouts).
- After the creation I'll see all of the selected exercises for that workout in cards, with details about the exercise.
- If I would   delete the whole workout what I've created, then I'll can do it easily on the workout page.

---

## FUTURE WORK

- Remove exercises from created workout
- Add video for each exercises
- Use external API for stored exercises

---

## RESOURCES

[Express](https://expressjs.com/)  
[MongoDB](https://www.mongodb.com/atlas/database)  
[Mongoose](https://mongoosejs.com/)
[JWT](https://jwt.io/)

---

## BUILT BY
 
[Ádám Báthori-Kiss](https://github.com/AdamBathoriKiss)

