import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton() {
  const onClickButton = () => {
    alert('aqui se abrira un modal');
  };

  return (
    <React.Fragment>
      <section className="buttonAgregar">
        <button className="buttonAgregar__mas" onClick={onClickButton}>
          <strong>+</strong> Agregar Más
        </button>
      </section>
    </React.Fragment>
  );
}

export { CreateTodoButton };
