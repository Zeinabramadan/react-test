import { useState, useCallback } from "react";
import SearchInput from "../SearchInput";

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log("Counter component rendered");

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <br />
      <SearchInput />
    </div>
  );
};

export default Counter;