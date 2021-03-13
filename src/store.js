import { createStore } from 'redux';

const initialState = {
  nextId: 2,
  todos: [
    {
      id: 0,
      description: 'drink coffee',
      completed: false,
    },
    {
      id: 1,
      description: 'sleep more',
      completed: true,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo = {
        id: state.nextId,
        description: action.payload.description,
        completed: false,
      };
      return {
        ...state,
        nextId: state.nextId + 1,
        todos: [...state.todos, newTodo],
      };
    }
    case 'REMOVE_TODO': {
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== action.payload.id)],
      };
    }
    case 'TOGGLE_TODO': {
      const newTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });

      return {
        ...state,
        todos: newTodos,
      };
    }
    default:
      return state;
  }
};

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

const store = createStore(rootReducer, enableReduxDevTools);

export default store;
