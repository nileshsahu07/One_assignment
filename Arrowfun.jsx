import { useState } from "react";

function Arrowfun(){
    
    const [name,setName] = useState("")

    let handleClick = ()=>{
        setName("Nilesh")
    }

    return(
        <>
            <h5>Answer-9 Arrow function example = Name:- {name}</h5>
            <button onClick={handleClick}>Click to Show Name</button>
        </>
    )
}
export default Arrowfun;