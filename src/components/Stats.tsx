import React, { useContext, useMemo } from 'react';
import { TodoContext } from '../context/TodoContext';

interface IStats {
  uncompleted: number;
  completed: number;
}

export const Stats: React.FC = () => {
  const { todos } = useContext(TodoContext);

  const { uncompleted, completed } = useMemo<IStats>(() => {
    const completed = todos.filter((todo) => todo.completed).length;
    return {
      uncompleted: todos.length - completed,
      completed,
    };
  }, [todos]);

  return (
    <section>
      Uncompleted: {uncompleted} | Completed: {completed}
    </section>
  );
};
