import React from "react";
import useCounter from "../hooks/useCounter";

function CountClick() {
  const [count, increment, decrement, reset] = useCounter(1);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => increment(5)}>increment</button>
      <button onClick={() => decrement(5)}>decrement</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default CountClick;
