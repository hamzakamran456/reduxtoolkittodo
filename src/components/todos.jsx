import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text} 
        <button onClick={}>X</button>
        </li>
      ))}
    </>
  );
};

export default todos;
