import React, { useState, useContext, useRef } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodosActionTypes } from '../reducer';

export const TodoInput: React.FC = () => {
  const [title, setTitle] = useState('');
  const { dispatch } = useContext(TodoContext);

  // TODO ref type def
  const divRef = useRef<HTMLDivElement>(null);

  const addTodo = (title: string) => dispatch({ type: TodosActionTypes.ADD_TODO, payload: title });

  // TODO handleSubmit, handleInputChange

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(title);
    setTitle('');
  };

  return (
    <section>
      <div ref={divRef}>div</div>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
        </label>
        <input type="submit" value="Add Todo" />
      </form>
    </section>
  );
};
