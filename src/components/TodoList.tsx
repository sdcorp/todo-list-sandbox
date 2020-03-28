import React, { useContext } from 'react';
import { Todo } from './Todo';
import { TodoContext } from '../context/TodoContext';

export const TodoList: React.FC = () => {
  const { todos } = useContext(TodoContext);
  return (
    <section>
      <ul>
        {!todos
          ? 'No todos'
          : todos.map((todo) => (
              <Todo key={todo.id} id={todo.id} completed={todo.completed}>
                {todo.title}
              </Todo>
            ))}
      </ul>
    </section>
  );
};
