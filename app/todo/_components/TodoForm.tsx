"use client";

import { IoAddCircleSharp } from "react-icons/io5";
import { useState } from "react";
import { ITodo } from "../_types/todo";
// import { useTodos } from "../_hooks/useTodos";

export default function TodoForm(props: { addTodo: (todo: ITodo) => void }) {
  const [title, setTitle] = useState("");

  const handleAddTodo = () => {

    if(title.length === 0) return;
    props.addTodo( { id: Date.now().toString(), title, completed: false, createdAt: new Date() });
    setTitle("");
  };

  return <div className="flex gap-2 items-center justify-center text-primary p-1 border-primary border-2 rounded-md">
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    <IoAddCircleSharp  className="text-primary text-2xl" onClick={handleAddTodo} />
  </div>;
}