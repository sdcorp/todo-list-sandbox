import { Dispatch } from "react";

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodosStats {
  uncompleted: number;
  completed: number;
}

export interface ITodoContext {
  todos: ITodo[];
  dispatch: Dispatch<{type: string, payload: any}>
  addTodo?: (title: string) => void;
  removeTodo?: (todoId: number) => void;
  toggleTodo?: (todoId: number) => void;
}
