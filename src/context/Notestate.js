import React, { useState } from "react";
import Notecontext from "./Notecontext";

const Notestate  = (props)=>
{
    
    const s1 = 
    {
        "Name" : "Ayush",
        "Role"  : "SDE intern"
     }

     const [state , setstate] = useState(s1);
    const update=()=>{
        setTimeout(() => {
            setstate({
                 "Name" : "God",
        "Role"  : "Creator"
            })
        }, 1000);
     }
    return(

        <Notecontext.Provider value = {{state,update}}>
            {props.children}
        </Notecontext.Provider>
          
    )

}

export default Notestate;