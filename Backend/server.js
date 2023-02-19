const dotenv = require("dotenv").config(); 
 const express = require("express");
 const mongoose = require("mongoose");
 const Task = require("./models/task_models");
 const cors = require("cors");
 const task_route = require("./routes/task_routes");
 const app = express();

 // Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use("/tasks",task_route);


 // Routes Page
 app.get("/", (req, res) => {
    res.send("Home Page!!!");
 });

 const PORT = process.env.PORT || 5000;

 mongoose.set('strictQuery', false);
 mongoose
      .connect(process.env.MONGO_URI) 
      .then(() => {
         app.listen(PORT, () => {
       console.log(`Server running at port ${PORT}`);
      });
      })
      .catch((err) => console.log(err))