import React, { Fragment, useState } from "react";

function CreateTask({ onCreate }) {
    const [taskName, setTaskName] = useState("");

    const handleInsert = () => {
        fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ task_name: taskName }),
        })
            .then((res) => res.json())
            .then((task) => {
                onCreate(task);
                setTaskName("");
            });
    };

    return (
        <Fragment>
            <div>
                <input
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <button onClick={handleInsert}>Add</button>
            </div>
        </Fragment>
    );
}

export default CreateTask;