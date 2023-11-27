import React, { useState, useTransition } from "react";

const UseTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);
  const handleCount = () => {
    startTransition(()=>setCount(count + 1));
    console.log(isPending, startTransition);
  };
  return (
    <div>
      <h3>This is UseTransition</h3>
      <p>count: {count}</p>
      <a href="www.google.com"><button onClick={() => handleCount()}>Inc</button></a>
      <p>{isPending}</p>
      
    </div>
  );
};

export default UseTransition;
