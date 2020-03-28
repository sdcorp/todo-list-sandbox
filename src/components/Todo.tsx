import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodosActionTypes } from '../reducer';

export const Todo: React.FC<{ id: number; completed: boolean }> = ({ children, id, completed }) => {
  const { dispatch } = useContext(TodoContext);
  // TODO need wrap into useCallback to avoid re-render
  const removeTodo = (todoId: number) => dispatch({ type: TodosActionTypes.REMOVE_TODO, payload: todoId });
  const toggleTodo = (todoId: number) => dispatch({ type: TodosActionTypes.TOGGLE_TODO, payload: todoId });
  return (
    <li>
      <span style={{ cursor: 'pointer' }} role="img" aria-label="done" onClick={() => toggleTodo(id)}>
        ✅
      </span>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>Title: {children}</span>
      <span style={{ cursor: 'pointer' }} role="img" aria-label="remove" onClick={() => removeTodo(id)}>
        ❌
      </span>
    </li>
  );
};
