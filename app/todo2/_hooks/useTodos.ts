"use client";

import { useEffect, useState } from "react";
import { ITodo } from "../_types/todo";

export const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    console.log('current todos', todos);
  }, [todos]);

  const addTodo = (todo: ITodo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    setTodos,
    addTodo,
    removeTodo
  };
};
