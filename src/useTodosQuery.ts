import { useState, useEffect } from 'react';
import { ITodo } from './interfaces';

export const useTodosQuery = () => {
  // TODO write type defs for hooks
  const [data, setData] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTodos() {
      try {
        setError(null);
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const todos: ITodo[] = await response.json();
        setData(todos);
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
