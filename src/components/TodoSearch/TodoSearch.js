import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
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
