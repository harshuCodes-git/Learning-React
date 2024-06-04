import React from 'react'
import { useState } from 'react'

const Hooks = () => {
    const [counter, setCounter] = useState(0)
    const increment = () => {
      setCounter(counter + 1)
    }
    const decrement =()=>{
        setCounter(counter - 1)
    }
  return (
    <>
    <h1>This is concept of Hooks</h1>
    <br />
    <h2>The Real value is {counter}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>

  )
}

export default Hooks