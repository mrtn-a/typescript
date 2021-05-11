import { Todo, Action, ActionTypes } from '../actions';

// states is going to be an array of to dos and if we don't provide in a state then just use an empty array
export const todosReducer = (state: Todo[] = [], action: Action) => {
  // reducer body - switch statement

  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
