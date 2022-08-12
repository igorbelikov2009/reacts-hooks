import React from "react";
// useDeferredValue  используется, когда мы не можем использовать useTransition или startTransition()
// оборачивает обновление state, которое мы помечаем, как неважное. Это позволяет разбить выполнение операции на части, не блокируя общий пользовательский поток
const Comments = ({ entities = [] }) => {
  return (
    <ul>
      {entities.map((comment) => (
        <li className="li-comments" key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Comments;

/* 
import React, { useDeferredValue } from "react";

const Comments = ({ entities = [] }) => {
  const values = useDeferredValue(entities);
  return (
    <ul>
      {values.map((comment) => (
        <li className="li-comments" key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Comments;
*/
