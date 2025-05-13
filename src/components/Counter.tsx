import { useState } from "react";
export default function Counter () {
  const [count, setCount] = useState<number>(0);
  const increaseCount = (value: number) :void => {
    setCount((prev: number) => prev + value)
  }
  const decreaseCount = (value: number) :void => {
    setCount((prev: number) => prev-value)
  }
  return (
    <div>
      <button onClick={() =>increaseCount(1)}>click me to increase value</button>
      {count}
      <button onClick={() => decreaseCount(1)}>click me to increase value</button>
    </div>
  )
}