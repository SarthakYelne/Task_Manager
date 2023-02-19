import TaskForm from "./TaskForm";
import Task from "./Task";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { URL } from "../App";
import loadingImg from "../assets/loader.gif";


const TaskList = () => {
    const [tasks, setTask] = useState([]);
    const [completedTask, setCompletedTask] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        completed: false
    });
    const {name} = formData
    
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({ ...formData, [name] : value });
    };

    const getTasks = async () => {
        setIsLoading(true);
        try {
            const {data} = await axios.get(`${URL}/tasks`);
            setTask(data);
            setIsLoading(false);
        } catch (error) {
            toast.error(error.message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getTasks();
    }, [])

    const createTask = async (e) => {
        e.preventDefault();
            if(name === ""){
                return toast.error("Input Field Cannot be Empty");
            }
            try {
                await axios.post(`${URL}/tasks`, formData);
                toast.success("Task added succesfully");
                setFormData({ ...formData, name: "" });
            } catch (error) {
                toast.error(error.message);
            }
    } 

    return <div>
                 <h1>Task Manager</h1>
                 <TaskForm name={name} handleInputChange={handleInputChange} createTask={createTask}/>
                 <div className="--flex-between --pb">
                    <p>
                        <b>Total Tasks :</b>0
                    </p>
                    <p>
                        <b>Completed Tasks :</b>0
                    </p>
                 </div>
                 <hr />
                 {
                    isLoading && (
                        <div className="--flex-center">
                            <img src={loadingImg} alt="Loading" />
                        </div>
                    )}
                    {
                        !isLoading && tasks.length === 0 ? (
                            <p className="--py">No task added. Please add a Task</p>
                        ) : (
                            <>
                            {tasks.map((task, index) => {
                                return(
                                    <Task key={task._id} task={task} index={index} />
                                )
                            })}
                            </>
                        )
                    };
                 
           </div>
};

export default TaskList;