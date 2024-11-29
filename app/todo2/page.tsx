import TodoForm from "./_components/TodoForm";
import TodoList from "./_components/TodoList";

async function getTodos() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || ''
  const res = await fetch(`${baseUrl}/api/todos2`, { cache: 'no-store' })
  return res.json()
}

export default async function Page() {

  const initialTodos = await getTodos();

  return (<div className="flex flex-col gap-4 items-center justify-center py-3">
    <TodoForm  />
    <TodoList todos={initialTodos}  />
  </div>);
}