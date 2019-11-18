import { createContext } from 'react';
import { ITodoContext } from '../interfaces';

export const TodoContext = createContext<ITodoContext>({
  todos: [],
  dispatch: () => {}
});
