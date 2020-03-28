import { Dispatch } from 'react';
import { TodosActionTypes } from './reducer';

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodosStats {
  uncompleted: number;
  completed: number;
}

export interface ITodoContext {
  todos: Array<ITodo>;
  dispatch: Dispatch<{ type: TodosActionTypes; payload: any }>;
}
