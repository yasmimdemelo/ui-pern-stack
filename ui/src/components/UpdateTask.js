import React, { useState } from "react";

function UpdateTask({ task, onUpdate }) {
  const [taskName, setTaskName] = useState(task.task_name);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:5000/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task_name: taskName }),
    })
    .then(() => {
      onUpdate({ ...task, task_name: taskName });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Task</h2>
      <input type="text" value={taskName} onChange={(event) => setTaskName(event.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateTask;