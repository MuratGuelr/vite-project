import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleDecrease = () => {
    setCounter(counter - 1);
  };
  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};

export default Counter;
