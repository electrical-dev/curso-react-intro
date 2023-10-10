import "./TodosLoading.css";
import React from 'react';
function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="Loading-completeIcon"></span>
      <p className="LoadingTodo-text"></p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}
export { TodosLoading };
