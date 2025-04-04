import React from "react";
import "./App.css";
import AddTodo from "./components/addtodo";
import Todos from "./components/todos";

function App() {
  return (
    <>
      <h1>Learn About Redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
