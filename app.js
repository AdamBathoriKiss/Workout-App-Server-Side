require("dotenv/config");
require("./db");
const { isAuthenticated } = require("./middleware/jwt.middleware");
const express = require("express");
const app = express();

require("./config")(app);

const exerciseRouter = require('./routes/exercises.routes');   
app.use('/api', exerciseRouter);   

const authRouter = require("./routes/auth.routes");          
app.use("/auth", authRouter);  

const regRouter = require("./routes/reg.routes");          
app.use("/api", regRouter);  




require("./error-handling")(app);

module.exports = app;
