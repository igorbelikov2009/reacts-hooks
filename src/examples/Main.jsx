import React from "react";
import { useContext } from "react";
import { AlertContext } from "../alert/AlertContext";

const Main = () => {
  const { toggle } = useContext(AlertContext);

  return (
    <>
      <h1>Привет в примере c Context</h1>

      <button onClick={toggle} className="btn btn-success">
        Показать alert
      </button>
    </>
  );
};

export default Main;
