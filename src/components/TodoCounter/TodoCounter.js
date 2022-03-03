import React from 'react';
import todoIcon from '../../images/todoIcon.png';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <header className="titulo">
        <h1 className="titulo-h1">Lista de Tareas</h1>
        <img className="titulo-icon" src={todoIcon} alt="todoIcon" />
      </header>
      <h2 className="todoCounter">
        Has completado {completedTodos} de {totalTodos} TAREAS
      </h2>
    </React.Fragment>
  );
}

export { TodoCounter };
