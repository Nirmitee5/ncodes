import { useState } from 'react'
import { PostComponent } from './post'


function App() {
  let [postcomp,addpostcomp] = useState([]);
  const postcomponents = postcomp.map(
    (postt)=>(
     <PostComponent
      name = {postt.name}
      followersCount = {postt.followersCount}
      time = {postt.time}
      image = {postt.image}
      description = {postt.description}
     />
    )
  )
  function addPost(){
      addpostcomp([...postcomp,{
        name : "shntanu",
        followersCount:"2334",
        time : "6 min ago",
        image : "https://i.pinimg.com/736x/8d/b1/8c/8db18c35b760761abd3d14bb69c3883e.jpg",
        description:"write the name of the house and do all the work you cN WORK HARDD N GO FOR IT do it foryourself and grind do hard that you shock yourself"
      }])
    
  }
  return(
    <div style = {{
            backgroundColor:"#152411ff",
            height:"100vh"
        }}>
      
        <div style = {{
            display:"flex",
            justifyContent:"center"
        }}>
           <div >
              <div>
                <button onClick={addPost}>
                  add post
                </button>
                {postcomponents}
            </div>
         </div>
      </div>
    </div>
      
  )
}

export default App
