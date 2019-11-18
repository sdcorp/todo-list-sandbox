import { ITodo } from './interfaces';
import { Reducer } from 'react';

export const todoReducer: Reducer<ITodo[], { type: string; payload: any }> = (state, { type, payload }) => {
  switch (type) {
    case 'SET_TODOS':
      return payload;
    case 'ADD_TODO':
      return [
        ...state,
        {
          userId: 777,
          id:
            Math.max.apply(
              null,
              state.map((i) => i.id)
            ) + 1,
          title: payload,
          completed: false,
        },
      ];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== payload);
    case 'TOGGLE_TODO':
      const toogleTodoCb = (todo: ITodo) => {
        if (todo.id === payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      };
      return state.map(toogleTodoCb);
    default:
      return state;
  }
};
