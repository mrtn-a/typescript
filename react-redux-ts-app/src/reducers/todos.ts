import { Todo, FetchTodosAction } from '../actions';
import { ActionTypes } from '../actions/types';

// states is going to be an array of to dos and if we don't provide in a state then just use an empty array
export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  // reducer body - switch statement
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
