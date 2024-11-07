import React, { useContext, useEffect } from 'react'

import Notecontext from '../context/Notecontext';
export default function Home() {
    const {state,update }= useContext(Notecontext);
    const user = state;
    useEffect(() => {
    
    
      return () => {
        update();
        
      }
       // eslint-disable-next-line
    }, [])
    

  return (
    
    <div>{user.Name} I am {user.Role}</div>
  )
}
