import React, {useContext,useState} from 'react'
import UserContext from '../context/UserContext'
const Login = () => {
  return (
    <div>
        <h2>Login</h2>
        <input type="text"  placeholder='Enter your Name'/>
        <input type="text"  placeholder='Paasword'/>
        <button onclick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login