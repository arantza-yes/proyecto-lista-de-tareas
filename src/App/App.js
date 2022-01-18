import './App.css';

import React from 'react';
import { AppUI } from './AppUI';

//CUSTOM HOOKS CON USE EFFECT -> aqui estamos usando useEffect para simular que estamos usando una API real y tener nuestros de error, loading y qu todo este ok para mostrar al usuario que algo esta pasando.

const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = React.useState(initialValue); // el item tiene el valor incial osea [], pero con setItem actualiza al obejto lleno del local storage
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      // usamos setTimeOut para simular que se demora el api y mostrar el mensaje de cargando
      try {
        //usamos try catch para ver si tenemos un error

        const localStorageTodosItem = localStorage.getItem(itemName);

        let parsedItem;
        //comparar si no existe crear un item en localStorage
        if (!localStorageTodosItem) {
          // es cierto que esto NO esta vacio? FALSO, si esta vacio
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue; // si no tiene el todo tiene que al menos tener un arrat vacio un estado vacio
        } else {
          parsedItem = JSON.parse(localStorageTodosItem);
        }

        setItem(parsedItem); //  aqui acatualiza al item de arriba |
        setLoading(false); // si ya cargo actualizamos nuestro setLoading a false al principi es true para que carge
      } catch (error) {
        setError(error); // aqui mostrarmos el error osea actualizamos el Error con setError con el error que manda el catch
      }
    }, 1000);
  });

  //persiste los datos para completar y eliminar to dos con la nueva actualizacion newTodos
  const saveItem = (newItem) => {
    try {
      // saveItem se encarga de actualizar el estado inicial haciendo un nuevo render de lo que traiga el localStorage
      const stringifiedItem = JSON.stringify(newItem);

      localStorage.setItem(itemName, stringifiedItem);
      //para no recargar la pagina manualmente pasamos setTodos para que se actualize al nuevo estado
      setItem(newItem); // le mandamos a actualizar
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    error,
    loading,
  }; // antes devolviamos en array si son dos variables, pero si hay mas se tiene que devolver en objeto
};

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
  /* const [todos, saveTodos] = useLocalStorage('TODOS_V1', []); // aqui utilizamos el custom hooks, trayendo el estado inicial y luego la funcion para actualizar el estado, dentro de useLocalStorage estammos argumentando el  nombre de lo que buscará, o creará, y el estado inicial de la variable(puede ser un objeto {}, un array [], un string vacío “”, etc) ---- todos seria -> item, y saveTodos seria -> saveItem*/

  const {
    item: todos,
    saveItem: saveTodos,
    error,
    loading,
  } = useLocalStorage('TODOS_V1', []); // arriba traiamos la destructuracion con array y se cambiaba el nombre y normal funcionaba en array se puede, PERO cuadno traemos en objeto se trae el mismo nombre y se reempleza por el  nuevo valor que queremos usar, si queremos el mismo nombre lo dejamos igual

  const [searchValue, setSearchValue] = React.useState('');

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

  return (
    <AppUI
      error={error}
      loading={loading}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filterTodos={filterTodos}
      onComplete={onComplete}
      onDelete={onDelete}
    />
  );
}

export default App;
