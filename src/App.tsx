import React from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.count);

  return (
    <div className="App">
      <div 
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center"
      }}
      >
        <div>
            <h1>Lista de tarefas</h1>
            <AddTodo />
            <ListTodo />
        </div>
      </div>
    </div>
  );
}

export default App;
