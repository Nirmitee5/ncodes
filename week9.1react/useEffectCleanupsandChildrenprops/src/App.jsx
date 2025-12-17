import { useState,useEffect } from "react";
function App(){
  const[showtime,setshowtimer] = useState(true);
  useEffect(function(){
    setInterval(function(){
      setshowtimer(showtime =>!showtime)
    },5000)
  },[])
    return (<div>
      {/* for unmounting and mounting the timer components */}
   {showtime && <Timer/>} 
   </div>)
}
function Timer(){
  const [seconds,setsecond] = useState(1)
  useEffect(function(){ // whenever component mounts this code runs
      let clock = setInterval(function(){
          setsecond(prev=>prev+1)
      },1000);
      
      return (function(){ 
        clearInterval(clock)
      })
  },[])
 //clean up function whever the component unmounts this clean up function runs it is used for unsubscriping from an event or clearing the timers
  return (
    <div>
      seonds elapsed 
      <br />
      {seconds}
    </div>
  )
}
export default App;

// function App(){
//  return(
//   <div>
//   {/* <Card inner = {"hello"}/> */}
//   {/* <Card inner = {<div>helooo how ae you</div>}/> 
  
//   instead of doing this write a component just like an html tag and put content inside it .that particular component will treate the content written inside it as its children props. */}
//   <Card>
//     helloo how are you 
//   </Card>
//   </div>
//  )
// }
// function Card({children}){
//   return (
//     <div style = {{
//       backgroundColor : "#aaeff4ff",
//       margin:10,
//       padding:10,
//       borderRadius:10,
      
//     }}>
//     {children}
//     </div>
//   )
// }
// export default App