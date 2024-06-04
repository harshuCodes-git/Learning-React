import { useState,useRef,useCallback,useEffect } from 'react'
import React from 'react'

// className ="peer w-full h-full bg-transparent text-blue-grey-700 font-sans font-normal focus:outline-0"; 

const Project4 = () => {
  const[length, useLength]=useState(8)
  const[numbers, newNumbers]=useState(false)
  const[characters, newCharacters]=useState(false)
  const[password,newpassword]=useState("Harsh")

  const passwordGen=useCallback(()=>{

    const numbers="1234567890"
    const characters="!@#$%^&*()_+"
    let password=""
    let charactersNumbers="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(newNumbers) charactersNumbers=+numbers
    if(newCharacters) charactersNumbers+=characters
    for(let i=0;i<length;i++){
      const index=Math.floor(Math.random()*charactersNumbers.length)
      password+=charactersNumbers[index]
    }
    newpassword(password)
  },[length,characters, numbers, newpassword])

  useEffect(()=>{
    passwordGen()
  
  },[length,characters, numbers, newpassword])

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    if (passwordRef.current) {
      navigator.clipboard
        .writeText(passwordRef.current.value)
        .catch((err) => console.error("Error copying text: ", err));
    }
  }, [password]);
  return (
    <>
      <div className="MainBox">
        <input type="text" className="Input-Box" value={password} readOnly ref={passwordRef}/>
        <button className='Copy-btn' onClick={copyToClipboard()}>Copy</button>
        <br />

        <input
          type="range"
          min={6}
          max={100}
          className="Rangebox"
          value={length}
          onChange={(e) => useLength(e.target.value)}
        />
        <label htmlFor="">Length: {length}</label>
        <input
          type="checkbox"
          className="Checkbox"
          defaultChecked={numbers}
          onChange={() => {
            newNumbers((prev)=>(!prev));
          }}
        />
        <label htmlFor="Numbers">Numbers</label>
        <input
          type="checkbox"
          className="Checkbox"
          onChange={() => {
            newCharacters((prev)=>(!prev));
          }}
        />
        <label htmlFor="Numbers">Characters</label>
      </div>
    </>
  );
}

export default Project4