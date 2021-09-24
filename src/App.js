import './App.css';

import React from 'react';

import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a react', completed: false },
  { text: 'LLorar con la llorona', completed: false },
  { text: 'Yesenia programmer', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <section className="App">
        <TodoCounter />

        <TodoSearch />

        <TodoList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>

        <CreateTodoButton />
      </section>
    </React.Fragment>
  );
}

export default App;
