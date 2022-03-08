import React from 'react';
import { TodoContext } from '../../TodoContext';

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <label>Agrega un tarea</label>
        <textarea cols="30" rows="10" onChange={onChange}></textarea>
        <div>
          <button type="submit">Añadir</button>
        </div>
      </form>
    </React.Fragment>
  );
}

export { TodoForm };
