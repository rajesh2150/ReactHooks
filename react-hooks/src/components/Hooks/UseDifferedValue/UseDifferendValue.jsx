import React, { useDeferredValue, useEffect, useState } from "react";

const UseDifferendValue = () => {
  const [name, setName] = useState("");
  const differedValue = useDeferredValue(name);
  useEffect(() => {
    console.log('original Name',name);
    console.log('differedvalue is',differedValue);
    console.log('------end-------')
  }, [name,differedValue]);

  return (
    <div>
      <h3>UseDifferendValue</h3>
      <input onChange={(e) => setName(e.target.value)} />
      <br />
      your Name : {name}
      <br />
      your Diff Name :{differedValue}
    </div>
  );
};

export default UseDifferendValue;
// UseDifferendValue takes an argument and gives a new value 
// example: newValue=UseDifferendValue(value)
//value should be primitive type like "boolean, string, number" otherwise for array and objects can cause infinite loop 
//it only shows after the complition of typing only
//---OutPut-------

// original Name r
//  differedvalue is 
//  ------end-------
//  original Name r
//  differedvalue is r
//  ------end-------


// This can see when we use UseEffect Hook for this