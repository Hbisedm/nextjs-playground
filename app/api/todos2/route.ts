import { NextResponse } from 'next/server';
import { ITodo } from '@/app/todo2/_types/todo';

/**
 * 数据简单处理：存服务器内存中
 */
let todos: ITodo[] = [];

export async function GET() {
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const todo: ITodo = await request.json();
  todos.push(todo);
  return NextResponse.json(todos);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  todos = todos.filter(todo => todo.id !== id);
  return NextResponse.json(todos);
}