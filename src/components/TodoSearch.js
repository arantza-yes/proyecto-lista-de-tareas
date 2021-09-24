import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  return (
    <React.Fragment>
      <section className="TodoSearch">
        <input className="TodoSearch-input" placeholder="Buscar Tareas" />
      </section>
    </React.Fragment>
  );
}

export { TodoSearch };
