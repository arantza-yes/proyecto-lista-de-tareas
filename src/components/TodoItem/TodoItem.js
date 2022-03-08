import React from 'react';
import { Modal } from '../Modal';
import { TodoUpdate } from '../TodoUpdate';
import './TodoItem.css';

function TodoItem(props) {
  const [openModal, setOpenModal] = React.useState(false);

  const onEdit = () => {
    setOpenModal(true);
  };
  return (
    <React.Fragment>
      <li className="TodoItem">
        <span
          className={`Icon Icon-check ${
            props.completed && 'Icon-check--active'
          }`}
          onClick={props.onComplete}
        >
          &#10004;
        </span>
        <p
          className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
        >
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

      {!!openModal && (
        <Modal>
          <TodoUpdate text={props.text} updateTodo={props.updateTodo} />
        </Modal>
      )}
    </React.Fragment>
  );
}

export { TodoItem };
