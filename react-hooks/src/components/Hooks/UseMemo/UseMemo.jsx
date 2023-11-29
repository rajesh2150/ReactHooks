import React, { useMemo, useState } from "react";
import UserNames from "./UserNames";

const UseMemo = () => {
  const names = [
    { id: 1, name: "Rajesh" },
    { id: 2, name: "lokesh" },
    { id: 3, name: "Mahesh" },
    { id: 4, name: "Kiran" },
    { id: 5, name: "vamsi" },
    { id: 6, name: "Satya" },
  ];
  const [count, setCount] = useState(0);
  const [name, setName] = useState(names);
  console.log("comp render");
  const displayNames = useMemo(()=>name.map((user,ind)=>{console.log('comp render using usememo');return <UserNames key={ind} names={user}/>}),[name])
  return (
    <div>
      <h3>This Is UseMemo</h3>
      <p>Count : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Inc + 1
      </button>
      <input
        type="text"
        onChange={(e) => {
          setName([...name,{id:name.length+1,name:e.target.value}]);
        }}
      />
      {displayNames}
    </div>
  );
};

export default UseMemo;

//useMemo stores the value in the cache and checks the value for re-rendering of the component
//if the value  is same as cache value ... the component is not re-rendered
// else the component is renderes
