import { useEffect, useState } from "react";

function Time() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect( function (){
        setInterval( function (){
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [] )
    return (
        <>
            <h1>Current Time</h1>
            <p>{time}</p>
        </>
    )
}

export default Time;