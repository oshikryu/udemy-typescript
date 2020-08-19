import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface fetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export const fetchTodos = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  return async (dispatch: Dispatch) => {
    const response = await(axios.get<Todo[]>(url));
    // when you add an action creator, you can enforce that you are always passing in an object
    // with the correct types and properties
    //
    // Adding in the optional generic for action creators
    dispatch<fetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data, // << expecting an array of Todos as defined by the action interface
    })
  }
};
