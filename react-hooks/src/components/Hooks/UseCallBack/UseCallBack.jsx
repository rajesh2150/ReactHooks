import React, { useCallback, useState } from 'react'

const UseCallBack = () => {
  const [count,setCount]=useState(0)
  console.log('total re-render')
  
  const handleClick=useCallback(()=>{
    console.log('useCallBack')
    setCount(count+1)
},[count])
const handleChange=(e)=>{
  console.log(e.target.value)
}
  return (
    <div>
      <h3>This is UseCallBack</h3>
    <p>Count: {count}</p>
    <input type='text' onChange={(e)=>handleChange(e)}/>
      <button onClick={()=>handleClick()}>Inc+1</button>
    </div>
  )
}

export default UseCallBack
