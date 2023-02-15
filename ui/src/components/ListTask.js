import React, { Fragment, useState, useEffect} from "react";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask";

function ListTask() {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    //Recupa os dados através do endponit da API e defini os dados retornados para o tasks estado usando setTasks função.
    //[] = significa que esse esfeito será executado apenas uma vez, quando o componente for montado.
    useEffect(() => {
        fetch("http://localhost:5000/tasks")
        .then((res) => res.json())
        .then((data) => setTasks(data));
    }, []);

    const handleCreate = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    //filter() método cria uma nova matriz que contém todas as tasks, exceto aquela que corresponde ao dado taskId.
    //Nesse caso, a função de retorno de chamada verifica se o id da task atual corresponde ao taskId que foi passado para a função e exclui essa tarefa do novo array.
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
    
    //{selectedTask && selectedTask.id === task.id ? (...) fornece uma maneira de renderizar condicionalmente um componente de atualização
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