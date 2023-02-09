//Fragment permite agrupar uma lista de components filhos
import React, { Fragment } from "react";

//Components
import ListTask from "./components/ListTask";

function App() {
  return (
    <Fragment >
      <div className="App">
        <h1>TODO App</h1>
        <ListTask />
      </div>
    </Fragment>
  );
}

export default App;
