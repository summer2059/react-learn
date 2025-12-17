import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [clicks, setClicks] = useState(0);

  async function fetchAdvice() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setClicks((c) => c + 1);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  }
  useEffect(function (){
    fetchAdvice()
  }, [])
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={fetchAdvice}>Click</button>
      
      <Message clicks={clicks}/>
    </div>
  )
}

function Message(props) {
  return (
    <p>you can click the button <span>{props.clicks}</span> times</p>
  )
}
