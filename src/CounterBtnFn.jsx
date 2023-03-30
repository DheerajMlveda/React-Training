import { useState } from "react";

export default function CounterBtnFn({ initial = 0 }) {
  const [counter, setCounter] = useState(initial);

  return <button onClick={() =>{ setCounter(counter =>counter + 1) ;}}>{counter}</button>;
}
