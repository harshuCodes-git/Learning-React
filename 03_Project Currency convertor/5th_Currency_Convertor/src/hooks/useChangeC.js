import React, { useState } from 'react'

const useChangeC = () => {
    [Change, newChange]=useState(0)
    newChange(Change+1)
    return newChange
  
}

export default useChangeC