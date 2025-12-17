
// memoizing a component will make sure that particular component will only be re-rendered when the prop/state present in that changes if there are no changes then it will not re-render that particular component 
import { useEffect,memo } from 'react'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0) // here state variable is initialized in the app component but it is not passed down to any of the other component . without memozing the children comoponents if the  app component re-renders then all the child component re-render so to avoid it we will memoize the components 
  useEffect(()=>{
    setInterval(() => {
      setCount(c=>c+1)
    }, 3000);
  })
  // now only the parent component will re-render and its children will not re-render as they are memoizedd ;))))))
   return <div>
    <Countervalue/>
    <Increase/>
    <Decrease/>
   </div>
}
const Countervalue = memo (function (){
  return <div>
    {1}
  </div>
})
const Increase = memo(function (){
  return <div>
    <button>increase</button>
  </div>
})
const  Decrease= memo (function (){
  return <div>
    <button>Decrease</button>
  </div>
})
export default App
