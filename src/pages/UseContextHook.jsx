import React from "react";
import Main from "../examples/Main";
import Alert from "../alert/Alert";
import AlertProvider from "../alert/AlertContext";

function UseContextHook() {
  return (
    <AlertProvider>
      <div className="container">
        <h1 className="text-primary">UseContext</h1>
        <Alert />

        <Main />
      </div>
    </AlertProvider>
  );
}

export default UseContextHook;
