import { useState } from "react";
import { useFetch } from "../jsprac/hooook"

function App() {
  const [no,setNo] = useState(0);
  const {post}= useFetch("https://jsonplaceholder.typicode.com/posts/"+no);
   return <div>
     <button onClick={()=>{
    setNo(2);
  }}>click</button>
   <button onClick={()=>{
    setNo(3);
  }}>click</button>
   <button onClick={()=>{
    setNo(4);
  }}>click</button>
   {/* if you write {post} here it cannot directly render the objects only strings and varibles it candirectly render so stringify the obj */}
   { JSON.stringify(post)}  
   </div>
 
 
}

export default App
