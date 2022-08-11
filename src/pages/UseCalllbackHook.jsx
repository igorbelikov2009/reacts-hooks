import React, { useCallback, useState } from "react";
import ItemsList from "../examples/ItemsList";

function UseCallbackHook() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? "darkred" : "black",
  };

  const generateItemsFromAPI = useCallback(
    (indexNumber) => {
      return new Array(count)
        .fill("")
        .map((_, i) => `Элемент ${i + indexNumber}`);
    },
    [count]
  );

  return (
    <div className="container">
      <div className="main">
        <h1 className="text-primary">UseCallback</h1>
        <h2 style={styles}>Количество элементов {count} </h2>

        <button
          className="btn btn-success"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Добавить
        </button>

        <button
          className="btn btn-warning"
          onClick={() => setColored((prev) => !prev)}
        >
          Изменить
        </button>

        <ItemsList getItems={generateItemsFromAPI} />
      </div>
    </div>
  );
}

export default UseCallbackHook;
