import React, {useReducer} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import {reducer, initialState} from './reducers/reducer';
import './components/Todo.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNewTodo = item => {
    dispatch({
      type: "ADD_NEW_TODO",
      payload: item
    });
  };

  const toggleCompleted = id => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: id
    });
  };

  const clearCompleted = () => {
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <h3>(New & Improved with Reducer!)</h3>
      <TodoForm clearCompleted={clearCompleted} addNewTodo={addNewTodo} />
      <TodoList todos={state.todos} toggleCompleted={toggleCompleted} />
    </div>
  )

}

export default App;
