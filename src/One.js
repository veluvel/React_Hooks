import React, { useState } from "react";

const initialCount = 0;
export const One = () => {
  const [name, setName] = useState("Velmurugan");
  const [count, setCount] = useState(initialCount);

  const ClickName = () => {
    setName("Im a Front End Developer");
  };

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={ClickName}>ClickName</button>
      <div className="head">
        <div>
          <button className="cl-btn" onClick={Increment}>Increment</button>
          <h1 className="value">{count}</h1>
          <button className="cl-btn" onClick={Decrement}>Decrement</button>
          <br/>
          <br/>
          <button onClick={()=>setCount(initialCount)}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default One;
// usState use panni count values-i epadi increment pandrathu decrement pandrathu nu ithu valiya pannikalam
// reset pandrathu epadi nu ithula paathurukom