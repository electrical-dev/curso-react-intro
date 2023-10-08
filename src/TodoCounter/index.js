import "./TodoCounter.css";
function TodoCounter({ total, completed }) {
  return (
    <>
      {total === completed && (
        <h2 className="TodoCounter">
          ¡Felicidades, completaste todos las tareas!
        </h2>
      )}
      {total !== completed && (
        <h2 className="TodoCounter">
          <span> {completed} </span>
          Tareas completadas de
          <span> {total} </span>
        </h2>
      )}
    </>
  );
}
export { TodoCounter };
