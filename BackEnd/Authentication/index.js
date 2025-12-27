// const express = require("express") //import the express lib, it returns your function and you call it to create 
// const app = express() // create an app instance
// app.use(express.json())
// const users = []//users array that we had created 
// function generatetoken(){ 
//     const options = ['a','b','c','d','e','d','f','g','h','i','j','k','l','m'];
//     let token = "";
//     for(let i = 0; i<14;i++){
//         token+=options[Math.floor(Math.random()*options.length)]
//     }
//     return token;
// }
// app.post("/signup",function(req,res){ 
//     // endpoint for sign in gets username and password and stores them into user array
//     const username = req.body.username;
//     const password = req.body.password;

//     users.push({
//         username:username,
//         password:password,
       
//     })
//     res.json({
//         "message":"you are successfully signed up"
//     })
// })
// app.post("/signin",function(req,res){
//     //endpoint gets username and password checks if that username is available into the array and then generate a token for that user, store it into the array and return it 
//     const username = req.body.username;
//     const password = req.body.password;
//     const founduser = users.find(u=>
//         u.username===username
//     )
//     if(founduser){
//         const token = generatetoken()
//         founduser.token = token;
//         res.json({
//             token:token,
//             userarray:users
//         })
//     }
//     else{
//         res.status(403).send({
//             "message":"invalid username"
//         })
//     }
  
// })
// app.get("/me",function(req,res){
//     // this is an authenticated endpoint meaning it will be only valid when the user is already signed in and it will return user's info 
//     const token = req.headers.token
//     const user = users.find(u=>u.token==token)
//     if(user){
//         res.json({
//           message:"here's your info : ",
//           username : user.username,
//           password: user.password
//         })
//     }
//     else{
//         res.status(403).json({
//             message:"invalid token "
//         })
//     }
// })
// app.listen(3000)

// in the above code we made use of tokens these tokens are stateful which basically means that we had to store them in an user array ie database which basically means we need to hit the database again and again just for user authentication 

// solution to the above problem is jwt ie json web tokens .  JWTs contain all the information needed to authenticate a request, so the server doesn’t need to store session data. All the data is stored in the token itself. ie we dont need to hit the database again and again for authenticated req

const express = require("express")  //import the express lib, it returns your function and you call it to create 
const JWT_SECRET = "mynameisnirmitee"; // create a secret as in key thing 
const jwt = require("jsonwebtoken") // create jwt instance
const app = express() // create an app instance
app.use(express.json())
const users = []//users array that we had created 

app.post("/signup",function(req,res){ 
    // endpoint for sign in gets username and password and stores them into user array
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password,
       
    })
    res.json({
        "message":"you are successfully signed up"
    })
})
app.post("/signin",function(req,res){
    //endpoint gets username and password checks if that username is available into the array and then generate a jso webtoken for that user and return it 
    const username = req.body.username;
    const password = req.body.password;
    const founduser = users.find(u=>
        u.username===username
    )
    if(founduser){
        const token = jwt.sign({
            username:username
        },JWT_SECRET)// use jwt.sign function it takes thing to be encodedd and the secret ie key 
        
        res.json({
            token:token,
            userarray:users
        })
    }
    else{
        res.status(403).send({
            "message":"invalid username"
        })
    }
  
})

app.get("/me",function(req,res){
    // this is an authenticated endpoint meaning it will be only valid when the user is already signed in and it will return user's info 
    const token = req.headers.token
    const decodedinfo = jwt.verify(token,JWT_SECRET);// decode the token to get the username using jwt.verify it takes token and the key 
    
    const username = decodedinfo.username
    const user = users.find(u=>u.username==username)
    if(user){
        res.json({
          message:"here's your info : ",
          username : user.username,
          password: user.password
        })
    }
    else{
        res.status(403).json({
            message:"invalid token "
        })
    }
})
app.listen(3000)