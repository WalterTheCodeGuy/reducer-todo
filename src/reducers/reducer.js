export const initialState = {
  todos: [
      {
          item: 'Learn React',
          completed: false,
          id: 3892987589,
      },
      {
          item: 'Learn about reducers',
          completed: false,
          id: 3892987585,
      },
      {
          item: 'Learn Redux',
          completed: false,
          id: 3892987586,
      },
      {
          item: 'Learn Async Redux',
          completed: false,
          id: 3892987587,
      },
      {
          item: 'Get MVP on Sprint',
          completed: false,
          id: 3892987588,
      },
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
      case 'ADD_NEW_TODO':
          const newTodo = {
              item: action.payload,
              completed: false,
              id: Date.now(),
          };
          return {
              ...state,
              todos: [...state.todos, newTodo]

          };
      case "TOGGLE_COMPLETED":
          let updatedTasks = state.todos.map(item => {
              if (item.id === action.payload) {
                  return {
                      ...item,
                      completed: !item.completed
                  };
              } else {
                  return item;
              }
          });
          return {
              ...state,
              todos: updatedTasks
          };
      case "CLEAR_COMPLETED":
          return {
              ...state,
              todos: state.todos.filter(item => !item.completed)
          };
      default:
          return state;
  }
};