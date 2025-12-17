import { useRef, useState } from "react";
// first usecase : Creating a reference to the DOM element  

// export default function App(){
//   //useref is a hook that lets you create reference to the value or a dom element while persisting its value in the re-render 
//   const inputref = useRef();
//   function focuss(){
//     inputref.current.focus();
//   }
//   return <div>
//     <input ref = {inputref} type="text" />
//     <input type="text" />
//     <button onClick={focuss}>submit</button>
//   </div>
// }


// first usecase : Creating a reference to the value 

// now the challenge is to create a clock with start and stop button 3 types of variables : 
//1. simple variable 2. state variable 3. useref 
// now using the simple variable : it gets initialized everytime the component re-renders thus the value is lost
// 2. state variable : works just fine but causes extra re-render .
//3. useref : works and the best approach . persists the value even after re-rendering and does not trigger the re-render as well

export default function App(){
  const [currentcounter,setcounter] = useState(1);
  const timer = useRef();
  function startclock(){
    let value = setInterval(function(){
      setcounter(currentcounter=>currentcounter+1);// functional form avoids closure and give the fresh value not the stale one 
    },1000)
    timer.current = value;
  }
  function stopclock(){
    clearInterval(timer.current);
  }
  return <div>
    {currentcounter}
    <br />
     <button onClick={startclock}>start</button>
     <button onClick={stopclock}>stop</button>
  </div>
}