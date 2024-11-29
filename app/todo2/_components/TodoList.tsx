import { ITodo } from "../_types/todo";
import TodoItem from "./TodoItem";


export default function TodoList(props: { todos: ITodo[] }) {
  return <div className="flex flex-col gap-2 items-start justify-center">
    {props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </div>;
}