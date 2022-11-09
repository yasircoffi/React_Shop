import React, { useState } from "react";
import Button from "../Button/Button"
import "./itemcount.css";

export default function ItemCount({ stock, initial, text, onAddToCart }) {
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
      <Button onClick={()=> { onAddToCart(count)}} className="counterbutton">{text}</Button>
    </div>
  );
  }