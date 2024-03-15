import React, { useState } from "react";
const Counter = () => {
  // initiate useState()
  const [count, setCount] = useState(7);

  return (
    <div>
      <br />
      <p>Counter: {count}</p>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        Up
      </button>
      <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
        Down
      </button>
      <h1>
        -------------------useState() ---------------------------------------
      </h1>
    </div>
  );
};

export default Counter;
