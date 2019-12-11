import React from 'react';

const Todo = props => {
  const toggleCompleted = () => {
    props.toggleCompleted(props.item.id);
  };

    return (
        <div className={`item${props.item.completed ? ' completed' : ''}`}
            onClick={toggleCompleted}>
            <p>{props.item.item}</p>
        </div>
    );
};

export default Todo;