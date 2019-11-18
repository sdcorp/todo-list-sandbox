import { useState, useEffect } from 'react';
import { ITodo } from './interfaces';

export const useTodosQuery = () => {
  const [data, setData] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    async function fetchTodos() {
      try {
        setError(null);
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();
        const slicedTodos = todos.slice(0, 5); // Optional. Slice just for better debug
        setData(slicedTodos);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    }
    fetchTodos();
  }, []);

  return { data, loading, error };
};
