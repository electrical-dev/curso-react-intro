import './CreateTodoButton.css';

function CreateTodoButton(){
  const createTodo = (e) => {
    console.log(e.target);
  };  
  return(
      <button 
      onClick={(event) => {
        createTodo(event)}}
      className='CreateTodoButton'>  </button>
    );
}
export {CreateTodoButton};