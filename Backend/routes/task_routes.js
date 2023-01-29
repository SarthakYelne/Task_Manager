const express = require("express");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/task_controllers");
const Task = require("../models/task_models");
const router = express.Router();


 router.post("/", createTask);
 router.get("/", getTasks);
 router.get("/:id", getTask);
 router.delete("/:id", deleteTask);
 router.put("/:id", updateTask);
module.exports = router