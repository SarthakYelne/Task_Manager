import {MdCheckBoxOutlineBlank, MdEdit, MdDelete} from "react-icons/md"
const Task = ({task, index}) => {
    return <div className="task" >
        <p>
            <b>{index + 1}. </b>
            {task.name}
        </p>
        <div className="task-icons">
        <MdCheckBoxOutlineBlank color="green" size={25}/>
        <MdEdit color="purple" size={25}/>
        <MdDelete color="red" size={25}/>
        </div>
    </div> 
};

export default Task;