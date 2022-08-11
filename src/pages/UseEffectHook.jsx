import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      console.log("cleaner");
    };
  }, [type]); // мы следим за изменением [type]

  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    console.log("ComponentsDidMount");

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div className="container">
      <div className="main">
        <h1 className="text-primary">UseEffect </h1>

        <h2>Ресурс {type} </h2>

        <button onClick={() => setType("users")}>Пользователи</button>
        <button onClick={() => setType("todos")}>Todos</button>
        <button onClick={() => setType("posts")}>Посты</button>

        {/* <pre>{JSON.stringify(data, null, 2)} </pre> */}
        <pre>{JSON.stringify(pos, null, 2)} </pre>
      </div>
    </div>
  );
}

export default UseEffectHook;
