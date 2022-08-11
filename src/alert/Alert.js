import React, { useContext } from "react";
import { AlertContext } from "./AlertContext";

const Alert = () => {
  const alert = useContext(AlertContext);
  if (!alert.visible) return null;

  return (
    <div className="alert alert-danger">Это очень и очень важное сообщение</div>
  );
};

export default Alert;
