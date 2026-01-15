import { useEffect, useState } from "react";


function useHistoryState(initialValue) {
  const [arr, setArr] = useState([initialValue]);
  const [index, setIndex] = useState(0);

  const value = arr[index];

  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const setUpdateWithHistory = (val) => {
    const nextValue = typeof val === "function" ? val(value) : val;

    setArr((prevArr) => {
      let nextArr = prevArr.slice(0, index + 1);

      nextArr.push(nextValue);

      let nextIndex = nextArr.length - 1;

      if (nextArr.length > 10) {
        const cut = nextArr.length - 10;
        nextArr = nextArr.slice(cut);
        nextIndex -= cut;
      }

      setIndex(nextIndex);

      return nextArr;
    });
  };

  const undo = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const redo = () => {
    setIndex((prev) => (prev < arr.length - 1 ? prev + 1 : prev));
  };

  useEffect(() => {
    setCanUndo(index > 0);
    setCanRedo(index < arr.length - 1);
  }, [index, arr]);

  return { value, setValue: setUpdateWithHistory, undo, redo, canUndo, canRedo, index, arr };
}

// 사용 예시
export default function Counter() {
  const { value, setValue, undo, redo, canUndo, canRedo, index, arr } = useHistoryState(0);

  return (
    <div style={{ padding: 20 }}>
      <p>값: {value}</p>
      <p>index: {index}</p>
      <p>history: {JSON.stringify(arr)}</p>

      <button onClick={() => setValue((v) => v + 1)}>+1</button>
      <button onClick={undo} disabled={!canUndo}>Undo</button>
      <button onClick={redo} disabled={!canRedo}>Redo</button>
    </div>
  );
}
