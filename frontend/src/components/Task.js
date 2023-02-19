import {MdOutlineCheckBox, MdEdit, MdDelete} from "react-icons/md"

const Task = ({task, index, deleteTask, getSingleTask, setToComplete}) => {
    return (
    <div className={task.completed ? "task completed" : "task"}>
        <p>
            <b>{index + 1}. </b>
            {task.name}
        </p>
        <div className="task-icons">
        <MdOutlineCheckBox color="green" size={25} onClick={() => setToComplete(task)} />
        <MdEdit color="purple" size={25} onClick={() => getSingleTask(task)} />
        <MdDelete color="red" size={25} onClick={() => deleteTask(task._id)} />
        </div>
    </div> )
};

export default Task;