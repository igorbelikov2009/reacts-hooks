import React, { useState } from "react";

//   ===============
function computeInitialCounter() {
  console.log("Some calculations....");
  return Math.trunc(Math.random() * 20);
}
//   ===============

function useCounter(initialValue) {
  const [value, setValue] = useState(initialValue);

  const incrementClobal = () => {
    setValue((prev) => {
      return prev + 1;
    });
  };

  const decrementClobal = () => {
    setValue(value - 1);
  };

  return {
    bind: { value, incrementClobal, decrementClobal },
  };
}

const HomeUseStateCopy = () => {
  const count1 = useCounter(1);
  const count2 = useCounter(10);
  const countF = useCounter(() => {
    return computeInitialCounter();
  });

  const [state, setState] = useState({
    title: "Счётчик",
    date: Date.now(),
  });

  function updateTitle() {
    setState((prev) => {
      return {
        ...prev,
        title: "Новая запись",
      };
    });
  }

  return (
    <div className="py-3">
      <h1 className="text-primary">UseState Copy</h1>

      <div>
        <div>
          <p>Счётчик 1</p>
          <h3> {count1.bind.value} </h3>
        </div>

        <button
          onClick={count1.bind.incrementClobal}
          className="btn btn-success"
        >
          Добавить
        </button>
        <button
          onClick={count1.bind.decrementClobal}
          className="btn btn-danger"
        >
          Убрать
        </button>

        <button onClick={updateTitle} className="btn btn-light">
          Изменить
        </button>

        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>

      <div className="block">
        <div>
          <p>Счётчик 2</p>
          <h3>{count2.bind.value} </h3>
        </div>

        <button
          onClick={count2.bind.incrementClobal}
          className="btn btn-success"
        >
          Добавить
        </button>
        <button
          onClick={count2.bind.decrementClobal}
          className="btn btn-danger"
        >
          Убрать
        </button>
      </div>

      <div className="block">
        <div>
          <p>Счётчик 3 (исходное значение рандомное, из функции)</p>
          <h3>{countF.bind.value} </h3>
        </div>

        <button
          onClick={countF.bind.incrementClobal}
          className="btn btn-success"
        >
          Добавить
        </button>
        <button
          onClick={countF.bind.decrementClobal}
          className="btn btn-danger"
        >
          Убрать
        </button>
      </div>
    </div>
  );
};

export default HomeUseStateCopy;
