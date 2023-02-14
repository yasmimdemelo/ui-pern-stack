import React, { Fragment, useState, useEffect} from "react";
import CreateTask from "./CreateTask";

function ListTask() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/tasks")
        .then((res) => res.json())
        .then((data) => setTasks(data));
    }, []);

    const handleCreate = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const handleDelete = (taskId) => {
        fetch(`http://localhost:5000/tasks/${taskId}`, {
            method: 'DELETE'
        })
        .then(() => {
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
        });
    };

    return(
        <Fragment>
            <CreateTask onCreate={handleCreate}/>
            <div>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            {task.task_name}
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}

export default ListTask;