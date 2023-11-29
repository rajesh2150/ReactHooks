import React, { useState, forwardRef, useImperativeHandle } from "react";

const Counter = ({ Ref }) => {
  const [count, setCount] = useState(null);
  const reset = () => {
    setCount(0);
  };
  useImperativeHandle()
  useImperativeHandle(Ref, () => ({
    name: (val) => {
      console.log(val);
    },
    reset,
  }));
  return (
    <div>
      <h3>counter:{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default forwardRef(Counter);


//import forwardRef from react and export as  forwardRef(Counter)
//import useImperativeHandle from react
//useImperativeHandle(ref,init,dep[]) takes "ref, init" method function,"dep[]" for passing some funcationalities to parent
//ex: useImperativeHandle(CounterRef,()=>({name:(val)=>{console.log(val)},reset}))
