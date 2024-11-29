# 使用api， 尽量用Server Component

page 使用 server component

todoList 使用 server component， 把页面交互的逻辑放在 todoItem 里面

todoForm 使用 client component， 因為需要使用 useState 和 useRouter

todoItem 使用 client component， 因為需要使用 useRouter

> `TodoForm.tsx`  和 `TodoItem.tsx`  可以 直接写 ’/api/todo2’ 而 `pages.tsx` 去get 列表的请求，一定得写 前缀

这是因为 TodoForm.tsx 和 TodoItem.tsx 是客户端组件（注意它们都标记了 'use client'），而 page.tsx 是服务器端组件。这导致了 fetch 在不同环境下的行为差异
