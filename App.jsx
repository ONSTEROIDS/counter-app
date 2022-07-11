import React, { useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  function decrease() {
    setcount(count - 1);
  }

  function increase() {
    setcount(count + 1);
  }
  function clear() {
    let count = 0;
    setcount(count);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <button onClick={clear}>clr</button>
    </div>
  );
}
export default App;
