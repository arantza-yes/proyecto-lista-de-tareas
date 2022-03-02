import './App.css';

import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

//CUSTOM HOOKS DE LOCAL STORAGE
/*const useLocalStorage = (itemName, initialValue) => {
  // nombre , valor inicial
  const localStorageTodosItem = localStorage.getItem(itemName); //traer el item

  let parsedItem;
  //comparar si no existe crear un item en localStorage
  if (!localStorageTodosItem) {
    // es cierto que esto NO esta vacio? FALSO, si esta vacio
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue; // si no tiene el todo tiene que al menos tener un arrat vacio un estado vacio
  } else {
    //y si existe devolver el item para mostrarlo
    parsedItem = JSON.parse(localStorageTodosItem);
    // console.log('mmm', parsedItem);
  }

  const [item, setItem] = React.useState(parsedItem); // item trae el estado inicial si esta lleno el objeto para pintarlo sino solo un array o el estado incial

  //persiste los datos para completar y eliminar to dos con la nueva actualizacion newTodos
  const saveItem = (newItem) => {
    // saveItem se encarga de actualizar el estado inicial haciendo un nuevo render de lo que traiga el localStorage
    const stringifiedItem = JSON.stringify(newItem);

    localStorage.setItem(itemName, stringifiedItem);
    //para no recargar la pagina manualmente pasamos setTodos para que se actualize al nuevo estado
    setItem(newItem); // le mandamos a actualizar
  };

  return [item, saveItem]; // lo devolvemos para que pueda ser usado depues como nuestro custom hooks
};*/

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
