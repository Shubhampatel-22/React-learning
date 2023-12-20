import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter >= 20) return;
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Counter value:{counter}</h1>
      <button onClick={addValue}>Increment value</button>
      <button onClick={removeValue}>Decrement value</button>
    </>
  );
}

export default App;
