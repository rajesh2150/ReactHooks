import React, { useRef } from 'react'
import Counter from './Counter'

const UseImperativeHandle = () => {
    const Ref=useRef()
  return (
    <div>
      <h3>UseImperativeHandle</h3>
      <Counter Ref={Ref}></Counter>
      <button onClick={()=>Ref.current?.reset()}>Reset from parent</button>
      <button onClick={()=>Ref.current?.name('rajesh')}>View from parent</button>
    </div>
  )
}

export default UseImperativeHandle

//1. UseImperativeHandle is used for any sort of functionality to the parent
//In this example we can use reset function from the counter and we can access from the parent this component .
//We should use "forwardRef" from the react to use this UseImperativeHandle method
//Names should be same for ref arugument and useRef in parent 
//  pass as  useImperativeHandle(CounterRef,()=>({name:(val)=>{console.log(val)},reset}))
// access as <button onClick={()=>CounterRef.current?.reset()}>Reset from parent</button>