import React,{useState} from 'react'

const UseState = () => {
  const [name,setName]=useState('')
  return (
    <div>
      <h3>This Is UseState</h3>
      <input type='text' onChange={(e)=>setName(e.target.value)}/>
      <h3>Hello,{name}</h3>
    </div>
  )
}

export default UseState
