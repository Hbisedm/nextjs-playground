'use client'

import { IoRemoveCircleSharp } from "react-icons/io5";
import { useRouter } from 'next/navigation'
import { ITodo } from "../_types/todo";

export default function TodoItem({ todo }: { todo: ITodo }) {
  const router = useRouter()

  const handleDelete = async () => {
    await fetch('/api/todos2', {
      method: 'DELETE',
      body: JSON.stringify({ id: todo.id })
    })
    router.refresh()
  }

  return (
    <div className="flex gap-2 items-center justify-center text-primary p-1">
      <span>{todo.title}</span>
      <span>{new Date(todo.createdAt).toLocaleString()}</span>
      <IoRemoveCircleSharp
        className="text-primary text-2xl"
        onClick={handleDelete}
      />
    </div>
  )
}