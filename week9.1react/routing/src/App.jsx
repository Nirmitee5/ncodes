import { BrowserRouter, Routes , Route ,Link,useNavigate, Outlet} from "react-router-dom";
export default function App(){
  return <div>
    <BrowserRouter>
    
     <Routes>
      <Route path = "/" element = {<Initial/>}>
      <Route path = "/" element = {<LandinPage/>}></Route>
      <Route path = "/class11" element = {<Class11/>}></Route>
      <Route path = "/class12" element = {<Class12/>}></Route>
      <Route path = "*" element = {<Errorhandling/>}></Route>
      </Route>
     </Routes>
    </BrowserRouter>
  </div>
}
function Initial(){
  return <div>
    <Link to = "/" > go to landing apge</Link> | 
    <Link to = "/class11" > class 11 </Link> | 
    <Link to = "/class12" > class 12  </Link>
   <Outlet/>
    <div>
      about us    contact us       phone no
    </div>
  </div>
}
function LandinPage(){
  return <div>
    hello whwere are you
  </div>
}
function Errorhandling(){
  return <div>
    404 errorrr
  </div>
}
function Class11(){
  return <div>
    class 11 apllications 
  </div>
}
function Class12(){
  const navigate = useNavigate();
  function redirectUser(){
    navigate("/");
  }
  return <div>
    class 12 apllications 
    <button onClick={redirectUser}> go back to landing page </button>
  </div>
}
