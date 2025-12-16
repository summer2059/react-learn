// import Test from "./test";

// function App() {

//   const name = "React";
//   return (
//     <><Test/>
//     <h1>hr { name }</h1>
//     </>
//   )
// }

// export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {


  let [counter, setCount] = useState(5)

  // let counter = 5;

  const addValue = () => { 
    // counter += 1;
    setCount(counter + 1);
    // console.log("Counter Value: ", counter);
  }

  // const removeValue = () => { 
  //   // counter -= 1;
  //   setCount(prev => (prev > 0 ? prev - 1 : 0));
  //   // console.log("Counter Value: ", counter);
  // }

  const removeValue = () => {
    if (counter > 0) {
      setCount(counter - 1);
    }
  }
  return (
    <>
      {/* <h1 className="text-4xl font-bold text-white">
        Tailwind v3 is working 🚀
      </h1>
      <h1>Hello buddy</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Increment</button>
      <br />
      <button
      onClick={removeValue}
      // disabled={counter === 0}
      >Remove Value</button> */}

      <Card username="John Doe" btnText = "Buy Now"/>
      <Card username= "test"  btnText= "visit me"/>

    </>
  )
}
export default App