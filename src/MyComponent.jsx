import { useState } from "react";
import { useRenderCount } from "./hooks/useRenderCount";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const renderCount = useRenderCount();

  console.log(`렌더링 횟수: ${renderCount}`);

  return (
    <div style={{ padding: 20 }}>
      <p>렌더링 횟수: {renderCount}</p>
      <p>상태(count): {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>re-render</button>
    </div>
  );
}
