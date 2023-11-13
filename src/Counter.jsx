import { useState,useEffect } from 'react'

const Counter = () =>{
    const [counter,setCounter] = useState(0);



  useEffect(()=>{
    // the code that we want to run
    console.log("in the useEffect: ", counter)

    // optional return function
    return ()=>{
        console.log("I have been cleaned up!!")
    }
  },[counter]) // dependency Array

  return (
    <>
          <p>{counter}</p>
          <button onClick={()=>{setCounter(counter + 1 )}}>+</button>
    </>
  )
}

export default Counter