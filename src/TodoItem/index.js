import { useEffect } from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className={`todo-item ${props.completed && "box--active"}`}>
      <CompleteIcon completed={props.completed} 
      onComplete={props.onComplete} />
      <p className="todo-item-p">{props.text}</p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}
export { TodoItem };
