import React, { useEffect, useState } from "react";

const ItemList2 = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItems(42);
    setItems(newItems);

    console.log("render");
  }, [getItems]);

  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
};
export default ItemList2;
