import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';

// dispatch function, as it's async
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    // TS: response will be an array of data
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      // enum
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};
