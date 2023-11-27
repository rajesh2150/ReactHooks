import React,{useMemo, useState} from 'react'

const UseMemo = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    console.log('comp render')
   
    const handleClick=useMemo(()=>{
        console.log('count',count+1)
        setCount(count+1)
    },[])
  return (
    <div>
      <h3>This Is UseMemo</h3>
      <p>Count : {count}</p>
      <button onClick={()=>{setCount(count+1)}}>Inc + 1</button>
      <input type='text' onChange={(e)=>{setName()}}/>
      {name}

    </div>
  )
}

export default UseMemo

//useMemo stores the value in the cache and checks the value for re-rendering of the component 
//if the value  is same as cache value ... the component is not re-rendered
// else the component is renderes 