import React, { Fragment, useState } from "react";

//onCreate é uma propriedade filha de CreatTask component
function CreateTask({ onCreate }) {
    const [taskName, setTaskName] = useState("");

    //handleInsert cria um novo objeto "Task" e passa-o para onCreate função propriedade.
    //fetch() recebe dois argumentos, a url do servidor (Node), e o objeto que possui o metodo post e um cabeçalho.
    //Os dados são passados na body usando o metodo json.stringify(), convertendo o objeto JS em json objeto
    //O objeto que está sendo convertido possui uma única propriedade task_namecujo valor é taskName.
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
                setTaskName(""); //redefine a variável de estado para uma string vazia, limpando efetivamente o campo de entrada.
            });
    };

    return (
        <Fragment>
            <div>
                <input
                    value={taskName}
                    placeholder="Enter your task here..."
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <button id="add" onClick={handleInsert}>Add</button>
            </div>
        </Fragment>
    );
}

export default CreateTask;