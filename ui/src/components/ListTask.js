import React, { Fragment, useState, useEffect} from "react";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask";

function ListTask() {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

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

    const handleUpdate = (updatedTask) => {
        setTasks((prevTasks) => prevTasks.map((task) => {
            if(task.id === updatedTask.id) {
                return updatedTask;
            }
            return task;
        }));
        setSelectedTask(null);
    };

    const handleEdit = (task) => {
        setSelectedTask(task);
    };
    
    return(
        <Fragment>
            <CreateTask onCreate={handleCreate}/>
            <div>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            {selectedTask && selectedTask.id === task.id ? (
                                <UpdateTask task={selectedTask} onUpdate={handleUpdate}/>
                            ) : (
                                <Fragment>
                                    {task.task_name}
                                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                                    <button onClick={() => handleEdit(task)}>Edit</button>
                                </Fragment>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}

export default ListTask;