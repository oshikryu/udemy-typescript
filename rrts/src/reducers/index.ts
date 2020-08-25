import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// describe state of the entire store
export interface StoreState {
  todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer, // typescript checks that this returns array of todos as defined in the interface
});
