import React from 'react';

function TodoUpdate(props) {
  const [updateTodo, setUpdateTodo] = React.useState(props.text);

  const onChange = (event) => {
    setUpdateTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.updateTodo(props.text, updateTodo);
  };

  return (
    <React.Fragment>
      <div>
        <form onSubmit={onSubmit}>
          <textarea value={updateTodo} onChange={onChange}></textarea>
          <button type="submit">Actualizar</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export { TodoUpdate };
