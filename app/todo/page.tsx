"use client";

import TodoForm from "./_components/TodoForm";
import TodoList from "./_components/TodoList";
import { useTodos } from "./_hooks/useTodos";

export default function Page() {
  const { todos, addTodo, removeTodo } = useTodos();
  return <div className="flex flex-col gap-4 items-center justify-center py-3">
    <TodoForm addTodo={addTodo} />
    <TodoList todos={todos} removeTodo={removeTodo} />
  </div>;
}