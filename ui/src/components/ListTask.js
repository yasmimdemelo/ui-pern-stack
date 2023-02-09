import React, { Fragment, useState, useEffect} from "react";

function ListTask() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/tasks")
        .then((res) => res.json())
        .then((data) => setTasks(data));
    }, []);

    return(
        <Fragment>
            <div>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>{task.task_name}</li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}

export default ListTask;