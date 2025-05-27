import React, {useEffect,useState} from "react";
import { GrTextAlignCenter } from "react-icons/gr";

function DigitalClock() {
    const [time,settime] = useState(new Date())


    useEffect (()=>{
        const timer = setInterval(()=>{
            settime(new Date())    //  Update time every second
        },1000)

        return()=> clearInterval(timer)    // clea function


    },[])


    return(

        <div>
            <h1>Digital Clock</h1>
            <h1><p>{time.toLocaleTimeString()}</p></h1>
        </div>
    );
};
export default DigitalClock;
