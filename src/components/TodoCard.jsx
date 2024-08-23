import React from 'react'

export default function TodoCard(props) {
    const { children, handledeleteTodos, index, handleEditTodos } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => {
            handleEditTodos(index)
        }}>
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
            handledeleteTodos(index);
        }}>
            
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
