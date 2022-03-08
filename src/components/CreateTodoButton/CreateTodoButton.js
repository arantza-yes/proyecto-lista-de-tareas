import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(!props.openModal);
    {
      /**OTRA FORMA DE HACERLO ES -- Las funciones actualizadoras del estado con useState nos permiten enviar el nuevo valor de nuestro estado (como lo veníamos haciendo hasta ahora), pero también nos permiten enviar una función que como parámetro recibe la versión actual del estado, ese es nuestro prevState. */
    }
    // props.setOpenModal(prevState => !prevState);
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
