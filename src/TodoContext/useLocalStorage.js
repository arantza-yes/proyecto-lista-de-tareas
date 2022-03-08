import React from 'react';

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
    // console.log('useefect');
  }, []);

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

export { useLocalStorage };
