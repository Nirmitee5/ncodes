
import { useState,useContext,createContext,useRef } from "react"
 const tocontext = createContext();
 
function App() {
  const inputref = useRef();
  const [todo,settodo] = useState([])
  const comp = todo.map((to,idx) =>
     (<TodoComp newtodo = {to.newtodo}  idxx = {idx} todo = {todo} settodo = {settodo}/>)
  )
  function addtodo(){
    if(inputref.current.value=="") return
    let x = [...todo,{
      newtodo : inputref.current.value
    }]
    settodo(x);
    inputref.current.value = ""
  }
  return <div style = {{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }} >
    <div style={{
      backgroundColor:"lightblue",
      padding:10,
      margin :15,
      borderRadius:45,
      height:"78vh",
      width:"35vw",
      display:"flex",
    justifyContent:"center",
    alignItems:"center"
    }}>
     <div style = {{
      margin:1100
     }}>
        <input ref = {inputref} type="text" />
    <button onClick={addtodo}> add to do </button>
    {comp}
     </div>
    </div>
  </div>
}
function TodoComp({newtodo,idxx,todo,settodo}){
  function deletetodo(){
   let x = todo.filter((_,i)=>i!==idxx)
   settodo(x)
  }
  return <div>
  {newtodo}
  <button onClick={deletetodo}> delete to do </button>
  </div>
}
export default App
