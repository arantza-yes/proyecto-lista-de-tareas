import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(!props.openModal);
  };

  return (
    <React.Fragment>
      <section className="buttonAgregar">
        <button className="buttonAgregar__mas" onClick={onClickButton}>
          {props.openModal ? (
            <strong>Cancelar</strong>
          ) : (
            <strong>+ Agregar</strong>
          )}
        </button>
      </section>
    </React.Fragment>
  );
}

export { CreateTodoButton };
