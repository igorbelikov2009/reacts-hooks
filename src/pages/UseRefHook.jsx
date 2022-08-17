import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  useEffect(() => {
    renderCount.current++;
    console.log(inputRef.current.value);
  });

  const focus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>

      <h5>Текущее состояние: </h5>
      <h3>{value}</h3>

      <h5>Предыдущее состояние: </h5>
      <h3>{prevValue.current}</h3>

      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button className="btn btn-success" onClick={focus}>
        Focuc
      </button>
    </div>
  );
};

export default UseRefHook;
// ключевое понимание useRef - он не вызывает рендер
