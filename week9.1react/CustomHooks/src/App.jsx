// import { useEffect, useState } from 'react'
// import { useFetch } from '../hooks/usepostt'

import { useEffect } from "react";


// // heavily asked in Interviews
// // custom hooks are the hooks that use (already provided  react hooks ) underhood. it encapsulates the logic which can be used again and again thus increasing the code reusabilty
// // it is a function which must begin with use 

// function App() {
//   // thus code re-usability is done by using custom hooks
//   const [currentpost,setCurrentpost] = useState(1);
//   const {data,loading} = useFetch("https://jsonplaceholder.typicode.com/posts/"+currentpost) // everytime ncurrentpost changes url changes 
//   if(loading){
//     return <div>
//       Loading.....
//     </div>
//   }


  
//   return <div>
//     <button onClick={()=>setCurrentpost(1)}>1</button>
//     <button onClick={()=>setCurrentpost(2)}>2</button>
//     <button onClick={()=>setCurrentpost(3)}>3</button>
//   { JSON.stringify(data)}
//   </div>
// }

// export default App



//   //useprev hook : basically a hook which gives the prev value ofthe state variable
  
// import { useState } from "react";
// import { usePrev } from "../hooks/useprevhook";
//   export default function App(){
//     const[number,setNumber] = useState(0) // if number is 0 =>1
//     const prev = usePrev(number) // this usePrev returns undefined => 1
//     return <div>
//       <button onClick={()=>{
//         setNumber(number+1)
//       }}>click me {number} </button>
//       the prev value is {prev}
//     </div>
//   }



//USE DEBOUNCE CONCEPT
function useDebounce(senddatatoBackend){
   const clock = useRef(); // in js we had clock as a global variable so to use it in react we need to use useRef for it 
   const func = ()=>{
    clearInterval(clock.current)
      clock.current = setTimeout(senddatatoBackend,200)
   }
   return func
  
}
export default function App(){
  function senddatatoBackend(){ // this is an expensive function so we need to make sure that it gets called only when it is necessary 
    fetch("https://jsonplaceholder.typicode.com/posts/1")
  }
  const debouncedfn = useDebounce(senddatatoBackend) // create a debouncedfn which will useDebounce hook and this this hook will return a function
  return <div>
    {/* as the input changes the debounced function gets called  */}
   <input type="text" onChange={debouncedfn} /> 
  </div>
}
