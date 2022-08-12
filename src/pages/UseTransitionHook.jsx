import axios from "axios";
import React, { useState, useEffect, useTransition } from "react";
import Comments from "../components/Comments";

const filterBySearch = (entities, search) =>
  entities.filter((item) => item.name.concat(item.body).includes(search));

const UseTransitionHook = () => {
  const [isPending, startTransition] = useTransition();
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState("");

  const handlerSearch = (e) => {
    startTransition(() => {
      setSearch(e.target.value);
    });
  };
  //    startTransition() оборачивает обновление state, которое мы помечаем, как неважное. Это позволяет разбить выполнение операции на части, не блокируя общий пользовательский поток
  // ================
  // useDeferredValue в компоненте Comments
  // ==============

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchComments() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setComments(response.data);
    // console.log(response.data);
  }

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/comments")
  //       .then((res) => res.json())
  //       .then(setComments);
  //   }, []);

  return (
    <div>
      <h1 className="text-primary">UseTransition</h1>
      <input
        className="input-transitionHook"
        type="text"
        onChange={handlerSearch}
      />
      {isPending && <h1>Rendering</h1>}
      {/* isPending мы можем, как использовать, как и не использовать */}

      <Comments entities={filterBySearch(comments, search)} />
    </div>
  );
};

export default UseTransitionHook;
