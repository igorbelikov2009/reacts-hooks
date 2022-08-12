// import UseEffectHook from "./components/UseEffectHook.tsx";
import React, { useEffect, useRef, useState } from "react";

function UseRefHook() {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  function focus() {
    inputRef.current.focus();
  }

  useEffect(() => {
    renderCount.current++;
    console.log(inputRef.current.value);
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div className="container">
      <h1 className="text-primary">UseRef </h1>

      <h2>Количество рендеров: {renderCount.current}</h2>
      <h2>Прошлое состояние: {prevValue.current}</h2>

      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      <button className="btn btn-success" onClick={focus}>
        Фокус
      </button>
    </div>
  );
}

export default UseRefHook;
