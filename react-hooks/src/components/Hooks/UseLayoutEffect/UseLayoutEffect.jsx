import React, { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffect = () => {
  const [user, setUser] = useState(1);
  const [admin, setAdmin] = useState("true");
  useEffect(() => {
    console.log(user, 'useeffect');
  }, [user,admin]);
  //first useLayoutEffect
  useLayoutEffect(() => {
    console.log(user, 'uselayout');
    console.log('sum',10+39)
    let i=0
    while(i<=10){
        console.log('Hello')
        i++
    }
  }, [user,admin]);
//second useLayoutEffect
  useLayoutEffect(()=>{console.log('second layout')},[user])

  return (
    <div>
      <h3>UseLayoutEffect</h3>
      <p>User {user}</p>
      <p>Admin {user % 2 === 0 ? admin :'false'}</p>
      <button
        onClick={() => {
          setUser(user + 1);
        }}>
        Change User
      </button>
    </div>
  );
};

export default UseLayoutEffect;
//same as useEffect 
//it is synchronous
//more useLayoutEffects can cause the component slowdown
//this can't re-render the component until it's complition