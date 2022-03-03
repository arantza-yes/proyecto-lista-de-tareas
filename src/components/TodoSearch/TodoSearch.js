import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const searchButton = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <React.Fragment>
      <section className="TodoSearch">
        <input
          className="TodoSearch-input"
          placeholder="Buscar Tareas"
          value={searchValue}
          onChange={searchButton}
        />
      </section>
    </React.Fragment>
  );
}

export { TodoSearch };
