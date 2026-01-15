// src/Timer.jsx (사용 예시)
import { useState } from "react";
import { useInterval } from "./hooks/useInterval";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000); // null 가능

  useInterval(() => {
    setCount((c) => c + 1);
  }, delay);

  return (
    <div style={{ padding: 20 }}>
      <p>Count: {count}</p>

      <button onClick={() => setDelay(delay ? null : 1000)}>
        {delay ? "정지" : "시작"}
      </button>

      <button onClick={() => setDelay((d) => (d ? d / 2 : 1000))}>
        속도 2배
      </button>
    </div>
  );
}
