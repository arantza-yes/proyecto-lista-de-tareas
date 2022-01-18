import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const onEdit = () => {
    console.log('click');
    // <input
    //   // onDoubleClick={() => console.log('click')}
    //   // className={`TodoItem-p input-p ${
    //   //   props.completed && 'TodoItem-p--complete'
    //   // }`}
    //   value={props.text}
    // />;
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        &#10004;
      </span>

      {/* <input
        onDoubleClick={() => console.log('click')}
        className={`TodoItem-p input-p ${
          props.completed && 'TodoItem-p--complete'
        }`}
        value={props.text}
        disabled
      /> */}
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>

      <span onClick={onEdit} className="edit">
        &#9998;
      </span>

      <span>&#10072;</span>
    </li>
  );
}

export { TodoItem };
