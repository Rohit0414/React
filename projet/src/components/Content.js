import { useState, useEffect } from "react";

function Timer(){
    const [count, setCount] = useState(0);

    useEffect(() =>{
        setTimeout(() =>{ 
            setCount((count)=> count + 1);
            
        }  
        )
        
    });
    return(
    <h2>Time's starts now {count}!</h2> )
}


export default Timer;