 const dotenv = require("dotenv").config(); 
 const express = require("express");
 const mongoose = require("mongoose");
 const app = express()

 // Middleware
app.use(express.json());

 // Routes Page
 app.get("/", (req, res) => {
    res.send("Home Page!!!");
 });

 // Create a Task
 app.post("/tasks", async (req, res) => {
      console.log(req.body);
      res.send("Task Created");
 })

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
