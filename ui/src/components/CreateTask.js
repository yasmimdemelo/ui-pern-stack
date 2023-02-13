import React, { Fragment, useState } from "react";

function CreateTask({ onCreate }) {
    const [taskName, setTaskName] = useState("");

    const handleInsert = () => {
        onCreate ({ task_name: taskName });
        setTaskName("");
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