import React from 'react';

import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodoContext } from '../TodoContext';

function AppUI() {
  return (
    <React.Fragment>
      <section className="App">
        <TodoCounter />

        <TodoSearch />

        <TodoContext.Consumer>
          {({ error, loading, filterTodos, onComplete, onDelete }) => (
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
          )}
        </TodoContext.Consumer>

        <CreateTodoButton />
      </section>
    </React.Fragment>
  );
}

export { AppUI };
