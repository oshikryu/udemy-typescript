import { Todo, fetchTodosAction } from './actions';
import { ActionTypes } from './types';
export const todosReducer = (
  state: Todo[] = [],
  action: fetchTodosAction
) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }

}
