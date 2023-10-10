import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider({children}) {
//    const defaultTodos = [
//      { text: "cortar cebolla", completed: true },
//      { text: "peinar el gato", completed: false },
//      { text: "cortar cabello", completed: false },
//      { text: "tomar pasta", completed: true },
//      { text: "tomar antibiotico", completed: false },
//      { text: "tomar antibiotico2", completed: false },
//      { text: "tomar antibiotico3", completed: false },
//      { text: "tomar antibiotico4", completed: false },
//      { text: "tomar antibiotico5", completed: false },
//      { text: "tomar antibiotico6", completed: false },
//    ];



//    localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
//    localStorage.removeItem('TODOS_V1')

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] =React.useState(false);
  const totalTodos = todos.length;
  const completedTodos = todos.filter((item) => !!item.completed).length;
  const searchedTodos = todos.filter((item) =>
    item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        setOpenModal,
        openModal, 
        addTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
