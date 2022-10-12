import React, { useState } from "react";
import "./itemcount.css";

export default function ItemCount({ stock, initial, text }) {
  const [count, setCount] = useState(initial);

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  return (
    <div className="countercontainer">
      <button className="counterinput" onClick={handleSubstract}>-</button>
      <p className="counternumber"> {count}</p>
      <button className="counterinput" onClick={handleAdd}>+</button>
      <button className="counterbutton">{text}</button>
    </div>
  );
  }