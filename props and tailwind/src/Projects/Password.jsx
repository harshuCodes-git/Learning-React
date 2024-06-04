import react from 'react'
import { useState } from 'react'

function Password(){

    const [length, setLength]=useState(8)
    return(
        <div>
            <h1 className='text-center text-4xl text-white'> Password</h1>
            <div className='flex justify-center items-center'>
                <input type='range' min='1' max='100' value={length} onChange={(e)=>setLength(e.target.value)}/>
                <p className='text-white'>{length}</p>
                </div>
        </div>
    )
}

export default Password