import InteractiveButton from "./InteractiveButton";

// 这是服务器组件
export default function Page() {
  return (
    <div>
      <h1>静态内容</h1>
      <p>更多静态内容</p>
      <InteractiveButton /> {/* 只有这个按钮是客户端组件 */}
    </div>
  )
}