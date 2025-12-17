import { useState,createContext, useContext} from "react"
const Bulbcontext = createContext() // creating context
 export function BulbProvider({children}){
 const[bulb,setbulb] = useState(true) 
 return <Bulbcontext.Provider value = {{
  bulb : bulb,
  setbulb : setbulb
 }}>
  {children}
 </Bulbcontext.Provider>
} 
function App() {
  // rolling up the state in the LCA (lowest Common Ancestor)
  return <div> 
   <BulbProvider>
    <LightBulb/>
   </BulbProvider>
  </div>
}
// unserstanding state rolling up : it is not an optimal way of rolling up the state . if there is a state which needs to be used in multiple components roll that state to its lca and then you can use in  its child components by sharing it 

// there exists a lot of problem when the props have to be passed down to deeper components it makes the code look ugly and hard to maintain : this problem is called as prop drilling and it can be solved bu making use of COntext API 
function LightBulb(){
  
  return <div>
    <Bulbonoff bulb /> 
    <Toggle setbulb />
  </div>
}
function Bulbonoff(){ // the bulbonoff thing needs the state variable : bulb 
  //using the context whever they are required 
  const {bulb} = useContext(Bulbcontext) 
  return <div>
    {bulb ? "bulb on :) " : "bulb-off :("} 
  </div>
}
function Toggle(){ // destructing it 
  //using the context whever they are required 
  //ie . consuming the context 
   const {setbulb} = useContext(Bulbcontext)
  function toggle(){               // the toggle thing needs the state variable : setbulb 
    setbulb(function(currentval){
       return currentval = !currentval
    })
  }
  return <div>
    <button onClick={toggle}>toggle bulb</button>
  </div>
}
export default App
