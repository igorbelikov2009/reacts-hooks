import React, { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => setValue("");

  return {
    bind: {
      value,
      onChange,
    },
    value,
    clear,
  };
}

function UseInputHook() {
  const input = useInput("");
  const lastName = useInput("");

  const allInputsCleaner = () => {
    input.clear();
    lastName.clear();
  };

  return (
    <div className="container">
      <div className="main">
        <h1 className="text-primary">Кастомный хук: UseInput</h1>
        {/* <input type="text" value={input.value} onChange={input.onChange} /> */}
        <input type="text" {...input.bind} />
        <input type="text" {...lastName.bind} />

        <button className="btn btn-warning" onClick={() => allInputsCleaner()}>
          Очистить
        </button>

        <hr />
        <h3>
          {input.value} {lastName.value}
        </h3>
      </div>
    </div>
  );
}

export default UseInputHook;
