import React, { useState, FormEvent, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const TodoInput: React.FC = () => {
  const [title, setTitle] = useState('');
  const { dispatch } = useContext(TodoContext);

  const addTodo = (title: string) => dispatch({ type: 'ADD_TODO', payload: title });

  const submitTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(title);
    setTitle('');
  };

  return (
    <section>
      <form onSubmit={submitTodo}>
        <label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
        </label>
        <input type="submit" value="Add Todo" />
      </form>
    </section>
  );
};
