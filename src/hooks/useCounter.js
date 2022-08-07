import { useState } from "react";

function useCounter(initialState = 1) {
  const [count, setCount] = useState(initialState);

  const increment = (value = 1) => setCount((prevState) => prevState + value);

  const decrement = (value = 1) => setCount((prevState) => prevState - value);

  const reset = () => setCount(initialState);

  return [count, increment, decrement, reset];
}

export default useCounter;
