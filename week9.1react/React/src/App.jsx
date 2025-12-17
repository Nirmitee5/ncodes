import { useState } from "react";

function App(){
    return (
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
            <Postcomponent
            name = {"nirmitee"}
            followersCount = {"230k"}
            time = {"12m"}
            image = {"https://i.pinimg.com/736x/05/dc/eb/05dceb7034f2fc267deede53f6c0de32.jpg"}
            description = {"working on learning about react and i can say that is is definitely very much fun"}
            />
        </div>
         <div>
            <Postcomponent
             name = {"bhavani"}
            followersCount = {"260k"}
            time = {"1hr ago"}
            image = {"https://i.pinimg.com/736x/8d/b1/8c/8db18c35b760761abd3d14bb69c3883e.jpg"}
            description = {"hackathon participation has been going really well"}
            />
        </div>
         <div>
            <Postcomponent
             name = {"tanisha"}
            followersCount = {"75k"}
            
            image = {"https://i.pinimg.com/1200x/f8/f0/89/f8f08993f32c43d4b491a182766680eb.jpg"}
            description = {"work hard and succhess is bound to be yours"}
            />
             <div style = {{
            backgroundColor:"#f0f8eeff",
            height:100,
            width:300,
            borderRadius:10,
            fontSize:"14px",
            margin:"10px",
            padding:12
            }} > <Togglemessage/></div>
            <div style = {{
            backgroundColor:"#f0f8eeff",
            height:100,
            width:300,
            borderRadius:10,
            fontSize:"14px",
            margin:"10px",
            padding:12
            }} > <Notificationgoup/></div>
        </div>
        </div>
        </div>
        </div>
    )
}
function Postcomponent({name,followersCount,time,image,description}){
    return(
        <div style = {{
            backgroundColor:"#f0f8eeff",
            height:100,
            width:300,
            borderRadius:10,
            fontSize:"14px",
            margin:"10px",
            padding:12
            }}>
        <div style = {{
            display:"flex",
            gap:"10px",
            
        }}>
            <div>
             <img src={image} style ={{
                height:40,
                width:40,
                borderRadius:30,
                marginLeft:10,
                marginRight:10,
             }}/>
             </div>
            <div >
                <div>
                    <b>{name}</b>
                </div>
                  <div>
                    {followersCount} followers
                </div>
                 {/* display the name, followerCount, time, image, and description using props */}
                  { time != undefined
                   && <div style ={{
                    display:"flex",
                    gap:6
                  }}>
                    
                    
                   <div>{time} ago</div>
                    <div><img src="https://as2.ftcdn.net/jpg/01/19/87/55/1000_F_119875541_kKubGUg9DrSapslnOx2NLzNZcaOM5tFf.jpg" style = {{
                        width:16,
                        height:16,
                        borderRadius:8
                    }} /></div>
                </div>}
            </div>

        </div>
        <div>
          {  description }
        </div>
        </div>
    )
}
function Togglemessage(){
    let [visible,setvisible] = useState(true);
    function toggle(){
        setvisible(!visible);
    }
    return (
       <div> <button onClick={toggle}>
            toggle me
        </button>
       { visible && <p>i am rendered</p>}
        </div>
       
    );
}
function Notificationgoup(){
    let [count,setcount] = useState(0);
    function up (){
        setcount(count+1);
    }
    return(
        <div style ={{
            display:"flex",
            
        }}>
            <div>
                <img src={"https://img.freepik.com/premium-vector/golden-bell-icon-clipart-cartoon-style-vector-illustration_761413-15988.jpg?w=360"} style = {{
                        width:16,
                        height:16,
                        borderRadius:8
                    }} onClick={up}/>
            </div>
             <div style = {{
                height:20,
                width:20,
                backgroundColor:"#389621ff"
             }}>
                {count}
            </div>
        </div>
    )
}
export default App