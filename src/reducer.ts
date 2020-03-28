import { ITodo } from './interfaces';
import { Reducer } from 'react';

// TODO make action type Enums
export enum TodosActionTypes {
  SET_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
}

export const todoReducer: Reducer<ITodo[], { type: TodosActionTypes; payload: any }> = (state, { type, payload }) => {
  switch (type) {
    case TodosActionTypes.SET_TODOS:
      return payload;

    case TodosActionTypes.ADD_TODO:
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

    case TodosActionTypes.REMOVE_TODO:
      return state.filter((todo) => todo.id !== payload);

    case TodosActionTypes.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

    default:
      return state;
  }
};
