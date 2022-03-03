import React from 'react';

import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodoContext } from '../TodoContext';
import { Modal } from '../components/Modal';

function AppUI() {
  const {
    error,
    loading,
    filterTodos,
    onComplete,
    onDelete,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <section className="App">
        <TodoCounter />

        <TodoSearch />

        <TodoList>
          {/* aqui usamos error para ver si tiene un error y mostrar el mensaje  */}
          {error && <p>hubo un error</p>}
          {/* aqui usamos loading para ver si carga  mostrtar el mensaje */}
          {loading && <p>esta cargando...</p>}
          {/* aqui decimos si no esta cargando y no esta con todos entonces mostratr el mensaje */}
          {!loading && !filterTodos.length && <p>Agrega tu primer todo</p>}

          {filterTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => onComplete(todo.text)}
              onDelete={() => onDelete(todo.text)}
            />
          ))}
        </TodoList>

        <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
      </section>

      {/** el doble && en javascritp signfica que si es true entonces hace algo ------ !! que exista openModal y que sea true -> es falso que openModal no existe? falso, si existe -- es falso que openModal no es true? falso si es true, entonces falso y falso hacen true */}
      {!!openModal && (
        <Modal>
          <p>Modal</p>
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };
