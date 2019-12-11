import React, {useState} from 'react';

const TodoForm = props => {
  const [todo, setTodo] = useState("");

  const changeHandler = event => {
    setTodo(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    props.addNewTodo(todo);
    setTodo('');
  };

  const clearCompleted = () => {
    props.clearCompleted();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={todo}
          placeholder='Create New Task'
          onChange={changeHandler}
        />
        <button>Add Task</button>
      </form>
      <button onClick={clearCompleted}>Clear Completed Items</button>
    </div>
  );

}

// class TodoForm extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             item: ''
//         };
//     }

//     handleChanges = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     };

//     submitTask = e => {
//         e.preventDefault();
//         this.props.addTask(this.state.item);
//     };

//     render() {
//         return (
//             <form onSubmit={this.submitTask}>
//                 <input
//                     type='text'
//                     placeholder='Create New Task'
//                     value={this.item}
//                     name='item'
//                     onChange={this.handleChanges}
//                 />
//                 <button>Add Task</button>
//             </form>
//         );
//     }
// }

export default TodoForm;