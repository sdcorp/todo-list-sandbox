import React, { useEffect, useReducer } from 'react';
import { TodoList } from './components/TodoList';
import { Stats } from './components/Stats';
import { TodoInput } from './components/TodoInput';
import { TodoContext } from './context/TodoContext';
import { useTodosQuery } from './useTodosQuery';
import { todoReducer } from './reducer';
import { Table } from './Table';
import { TodosActionTypes } from './reducer';

export const TodosContainer: React.FC = () => {
  const { data, loading, error } = useTodosQuery();
  const [state, dispatch] = useReducer(todoReducer, data);

  useEffect(() => {
    dispatch({ type: TodosActionTypes.SET_TODOS, payload: data });
  }, [data]);

  if (error) return <span style={{ color: 'tomato' }}>{error}</span>;

  if (loading) return <span>Loading...</span>;

  return (
    <TodoContext.Provider value={{ todos: state, dispatch }}>
      {/* Table */}
      {/* <Table data={data} fields={['id', 'title']} /> */}
      <Stats />
      <TodoList />
      <TodoInput />
    </TodoContext.Provider>
  );
};
