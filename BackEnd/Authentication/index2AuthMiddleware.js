const express = require("express")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "helloeveryone"
const app = express()
const users = []
app.use(express.json())
app.post("/signup",function(req,res){
    const username = req.body.username
    const password = req.body.password
    users.push({
        username:username,
        password:password
    })
    res.json({
        message:"user has been added"
    })
})
app.post("/signin",function(req,res){
    const username = req.body.username
    const password = req.body.password
    const finduser = users.find(u=>u.username==username)
    if(finduser){
        const token = jwt.sign({
            username:finduser.username
        },JWT_SECRET)
        res.json({
            message:"you are signed in",
            token:token
        })
    }
    else{
         res.json({
            message:"invalid username"
        })
    }
})
function auth(req,res,next){
   const token = req.headers.token
   const decodedData = jwt.verify(token,JWT_SECRET)
   if(decodedData.username){
      req.username=decodedData.username
      next();
   }
   else{
    res.json({
        message:"You are not logged in"
    })
   }
}
// authenticated endpoint : user will only be able to hit this endpoint only if he is signed in
app.get("/me",auth,function(req,res){
   
    let data = req.username;
    const user = users.find(u=>u.username==data)
     res.json({
            username:user.username,
            password:user.password
        })
})
app.listen(4000)