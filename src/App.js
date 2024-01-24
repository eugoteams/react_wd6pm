/** @format */

import { useEffect, useState } from "react";
import style from "./App.module.css";
import InputField from "./Components/InputField/InputField";
import UseEffectTuts from "./Components/UseEffectTuts/UseEffectTuts";

function App() {
  const [count, setCount] = useState(0);

  console.log("rendering the componenet");

  const onCLickAddListener = () => {
    setCount((prevState) => prevState + 1);
  };

  const onDecrementListener = () => setCount((prevState) => prevState - 1);

  useEffect(() => {
    if (count === 4) {
      alert("this is 4");
    }
  }, [count]);

  return (
    // <div className={`${style.container}`}>
    //   <input type="number" value={count} onChange={() => {}} />

    //   <div className={`${style.button_cnt}`}>
    //     <button onClick={onCLickAddListener}>increment</button>
    //     <button onClick={onDecrementListener}>decrement</button>
    //   </div>
    // </div>
    <UseEffectTuts />
  );
}

export default App;
