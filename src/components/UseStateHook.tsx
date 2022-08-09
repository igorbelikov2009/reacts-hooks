import React, { useState } from "react";

function computeInitialCounter() {
  console.log("Some calculations....");
  return Math.trunc(Math.random() * 20);
}

function UseStateHook() {
  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(computeInitialCounter());
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  const [state, setState] = useState({
    title: "Счётчик",
    date: Date.now(),
  });

  function increment() {
    // setCounter(counter + 1);
    setCounter((prev) => {
      return prev + 1;
    });
    // setCounter((prev) => prev + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function updateTitle() {
    setState((prev) => {
      return {
        ...prev,
        title: "Новая запись",
      };
    });
  }

  return (
    <div>
      <h1>хук UseState</h1>
      <h2>Счётчик {counter} </h2>
      <button onClick={increment} className="btn btn-success">
        Добавить
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Убрать
      </button>

      <button onClick={updateTitle} className="btn btn-light">
        Изменить
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default UseStateHook;
