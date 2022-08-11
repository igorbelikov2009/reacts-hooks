import React from "react";
import Main from "./examples/Main.tsx";
import Alert from "./alert/Alert.tsx";
import AlertProvider from "./alert/AlertContext";

function App() {
  return (
    <AlertProvider>
      <div className="container pt-3">
        <Alert />

        <Main />
      </div>
    </AlertProvider>
  );
}

export default App;
