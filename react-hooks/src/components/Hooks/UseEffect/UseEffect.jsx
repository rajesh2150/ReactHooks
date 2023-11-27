import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("compenent mount or Updated");
   
    return () => {
      console.log("cleanUp !..");
      clearInterval();
    };
  }, [count]);
  return (
    <div>
      <h3>This Is UseEffect</h3>
      <h3>count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Inc</button>
    </div>
  );
};

export default UseEffect;
//It Takes  side effect function and dependency
//we can implement class component life cycle methods
//1.componentDidMount =  useEffect(()=>{},[])
//2.componentDidUpdate = useEffect(()=>{},[dependency_values])
//3.componentWillUnmount = useEffect(()=>{...code ; return ()=>{clearInterval(name)}},[dependency_values])
