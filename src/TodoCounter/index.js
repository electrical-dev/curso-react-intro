import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { 
    completedTodos, 
    totalTodos } = React.useContext(TodoContext);
  return (
    <>
      {totalTodos === completedTodos && (
        <h2 className="TodoCounter">
          ¡Felicidades, completaste todos las tareas!
        </h2>
      )}
      {totalTodos !== completedTodos && (
        <h2 className="TodoCounter">
          Tareas completadas:
          <span> {completedTodos} </span>
           de
          <span> {totalTodos} </span>
        </h2>
      )}
    </>
  );
}
export { TodoCounter };
