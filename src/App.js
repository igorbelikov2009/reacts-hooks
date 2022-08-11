import React, { useEffect, useState } from "react";

function useLogger(value) {
  useEffect(() => {
    console.log("value changed", value);
  }, [value]);
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };
  return {
    value,
    onChange,
  };
}

function App() {
  const input = useInput("");
  const lastName = useInput("");

  useLogger(input.value);

  return (
    <div className="container pt-3">
      {/* <input type="text" value={input.value} onChange={input.onChange} /> */}
      <input type="text" {...input} />
      <input type="text" {...lastName} />

      <hr />
      <h3>
        {input.value} {lastName.value}{" "}
      </h3>
    </div>
  );
}

export default App;
