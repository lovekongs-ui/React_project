import { useRef } from "react";

export function useRenderCount() {
  const countRef = useRef(0);
  countRef.current += 1; // 렌더링 될 때마다 1 증가
  return countRef.current;
}
