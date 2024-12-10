'use client'

import { IoAddCircleSharp } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { useTodos } from "../_hooks/useTodos";

export default function TodoForm() {
  const [title, setTitle] = useState("");

  const router = useRouter()

  const handleAddTodo = () => {
    if(title.length === 0) return;
    fetch("/api/todos2", {
      method: "POST",
      body: JSON.stringify({ id: Date.now().toString(), title, completed: false, createdAt: new Date() }),
    });
    setTitle("");
    router.refresh()
  };

  return <div className="flex gap-2 items-center justify-center text-primary p-1 border-primary border-2 rounded-md">
    <input className="text-black" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    <IoAddCircleSharp  className="text-primary text-2xl" onClick={handleAddTodo} />
  </div>;
}