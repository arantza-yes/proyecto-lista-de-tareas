import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
  /* const [todos, saveTodos] = useLocalStorage('TODOS_V1', []); // aqui utilizamos el custom hooks, trayendo el estado inicial y luego la funcion para actualizar el estado, dentro de useLocalStorage estammos argumentando el  nombre de lo que buscará, o creará, y el estado inicial de la variable(puede ser un objeto {}, un array [], un string vacío “”, etc) ---- todos seria -> item, y saveTodos seria -> saveItem*/

  const {
    item: todos,
    saveItem: saveTodos,
    error,
    loading,
  } = useLocalStorage('TODOS_V1', []); // arriba traiamos la destructuracion con array y se cambiaba el nombre y normal funcionaba en array se puede, PERO cuadno traemos en objeto se trae el mismo nombre y se reempleza por el  nuevo valor que queremos usar, si queremos el mismo nombre lo dejamos igual

  const [searchValue, setSearchValue] = React.useState('');
  //state for modal
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  let filterTodos = [];

  if (!searchValue.length >= 1) {
    filterTodos = todos;
  } else {
    filterTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //crear una funcion que reciba el texto de los to dos que compare si son iguales y si lo encuentra que devuelva su indice con findIndex , luego copiar esa lista de todos sin no reacr no puede re-render y actualizar esa lista de todos con el estado y que cuando haga click marque completado lo que se marco.

  const onComplete = (text) => {
    //me va a traer la posicion encontrada -> compara
    const compara = todos.findIndex((todo) => todo.text === text);
    //esta copiando el obejto de to dos
    const newtodos = [...todos];
    //entra a la posicion y a su propiedad completed le pone true osea que ya se completo
    newtodos[compara].completed = true;

    saveTodos(newtodos); // aqui se argumenta saveItem pero lo traenmos en esta funcion con otro nombre saveTodos pero es valido cambiar de nombre igual funciona.
  };

  const onDelete = (text) => {
    //me va a traer la posicion encontrada -> compara
    const compara = todos.findIndex((todo) => todo.text === text);
    //esta copiando el obejto de to dos
    const newtodos = [...todos];
    //entra a la posicion y a su posicion le elimina con el metodo splice una posicion por cada click
    newtodos.splice(compara, 1);

    saveTodos(newtodos);
  };

  const addTodo = (text) => {
    const newtodos = [...todos];
    newtodos.push({
      completed: false,
      text,
    });
    saveTodos(newtodos);
  };

  const updateTodo = (textBefore, textAfter) => {
    const compara = todos.findIndex((todo) => todo.text === textBefore);
    const newtodos = [...todos];
    newtodos[compara].text = textAfter;
    saveTodos(newtodos);
  };

  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        filterTodos,
        onComplete,
        onDelete,
        addTodo,
        updateTodo,
        openModal,
        setOpenModal,
      }}
    >
      {/*implicitamente devolvera a AppUi.js todo lo que tenga - para envolver todo lo que tenga TodoProvider */}
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
