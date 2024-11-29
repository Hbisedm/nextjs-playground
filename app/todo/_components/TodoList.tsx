"use client";

import { ITodo } from "../_types/todo";
import { IoRemoveCircleSharp } from "react-icons/io5";


// import { useEffect } from "react";
// import { useTodos } from "../_hooks/useTodos";

export default function TodoList(props: { todos: ITodo[] , removeTodo: (id: string) => void}) {
  // const { todos } = useTodos();

  // useEffect(() => {
  //   console.log('current todos', todos);
  // }, [todos]);

  return <div className="flex flex-col gap-2 items-start justify-center">
    {props.todos.map((todo) => (
      <div key={todo.id} className="flex gap-2 items-center justify-center text-primary p-1">
        <span>{todo.title} </span>
        <span>{todo.createdAt.toLocaleString()}</span>
        <IoRemoveCircleSharp className="text-primary text-2xl" onClick={() => props.removeTodo(todo.id)} />
      </div>
    ))}
  </div>;
}