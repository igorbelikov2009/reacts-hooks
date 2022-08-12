import React, { useEffect, useMemo, useState } from "react";

function complexCompute(num) {
  console.log("complexCompute");
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

function UseMemoHook() {
  const [number, setNumber] = useState(42);

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  const [colored, setColored] = useState(false);

  const styles = useMemo(() => {
    return { color: colored ? "darkred" : "red" };
  }, [colored]);

  useEffect(() => {
    console.log("styles changed");
  }, [styles]);

  return (
    <div className="container">
      <h1 className="text-primary">useMemo</h1>

      <h2 style={styles}>Вычисляемое свойство {computed}</h2>

      <button
        className={"btn btn-success"}
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Добавить
      </button>

      <button
        className={"btn btn-danger"}
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Уменьшить
      </button>

      <button
        className={"btn btn-warning"}
        onClick={() => setColored((prev) => !prev)}
      >
        Изменить цвет заголовка
      </button>
    </div>
  );
}

export default UseMemoHook;
