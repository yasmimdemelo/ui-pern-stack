//Fragment permite agrupar uma lista de components filhos
import React, { Fragment } from "react";

//Components
import ListTask from "./components/ListTask";

function App() {
  return (
    <Fragment >
      <div className="App">
        <h1>Hello APP React</h1>
        <ListTask />
      </div>
    </Fragment>
  );
}

export default App;
