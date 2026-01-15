// src/hooks/useInterval.js
import { useEffect, useRef } from "react";

export function useInterval(callback, delay) {
  const savedCallback = useRef(callback);

  // 항상 최신 callback 저장 (클로저 문제 해결)
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // delay가 null이면 정지, delay 변경 시 즉시 반영
  useEffect(() => {
    if (delay === null) return;

    const id = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => clearInterval(id);
  }, [delay]);
}
