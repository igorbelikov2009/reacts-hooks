import React from "react";
import Main from "../examples/Main";
import Alert from "../alert/Alert";
import AlertProvider from "../alert/AlertContext";

function UseContextHook() {
  return (
    <AlertProvider>
      <div className="container">
        <div className="main">
          <h1 className="text-primary">UseContext</h1>
          <Alert />

          <Main />
        </div>
      </div>
    </AlertProvider>
  );
}

export default UseContextHook;
