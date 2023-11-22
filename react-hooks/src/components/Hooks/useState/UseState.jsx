import React,{useState} from 'react'

const UseState = () => {
  const [name,setName]=useState('')
  const [count,setCount]=useState(()=>{console.log('count render');return 0})
  return (
    <div>
      <h3>This Is UseState</h3>
      <input type='text' onChange={(e)=>setName(e.target.value)}/>
      <h3>Hello,{name}</h3>
      <hr/>
      <div>
        <h3>Count : {count}</h3>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
      </div>
    </div>
  )
}

export default UseState
