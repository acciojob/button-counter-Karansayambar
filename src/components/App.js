
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  function increment(){
      const crr = count;
      setCount(crr + 1);
  }
  return (
      <>
      <p>Button clicked {count} times</p>
      <button onClick={() => increment()}>Click me</button>
      </>
  )
}

export default App
