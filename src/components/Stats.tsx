import React, { useContext, useMemo } from 'react';
import { ITodo } from '../interfaces';
import { TodoContext } from '../context/TodoContext';

const getTodosStats = (todos: ITodo[]) => {
  const completed = todos.filter((todo) => todo.completed).length;
  return {
    uncompleted: todos.length - completed,
    completed,
  };
};

export const Stats: React.FC = () => {
  const { todos } = useContext(TodoContext);
  const { uncompleted, completed } = useMemo(() => getTodosStats(todos), [todos]);
  return (
    <section>
      Uncompleted: {uncompleted} | Completed: {completed}
    </section>
  );
};
