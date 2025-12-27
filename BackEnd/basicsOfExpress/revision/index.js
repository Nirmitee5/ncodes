const express = require("express")
const app = express()
app.use(express.json())
function isoldEnough(req,res,next){
   const age = req.body.a;
   if(age>=14){
    next();
   }
   else{
    res.json({
        "message":"you are not eligible to ride this ride"
    })
   }
}
app.use(isoldEnough)
app.get("/ride1",function(req,res){
     res.json({
        "message":"you have successfully riden this ride"
    })
})


app.listen(3000)
