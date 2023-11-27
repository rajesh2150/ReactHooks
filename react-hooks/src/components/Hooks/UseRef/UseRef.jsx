import React, { useRef,useId } from 'react'

const UseRef = () => {
    const inputEle=useRef()
    const Inputid=useId()
    console.log(useId())
        
    const handleRef=()=>{
        console.log(inputEle)
        inputEle.current.style.color='red'
        inputEle.current.style.height='30px'
        console.log(inputEle.current)
       
    

       
    }

  return (
    <div>
        <h3>This is useRef</h3>
      <input id={Inputid} type='text' ref={inputEle} />
      <button onClick={()=>handleRef()}>View </button>
    </div>
  )
}

export default UseRef

//used for access DOM elements
//hold mutable value prevent re-rendering  of the component