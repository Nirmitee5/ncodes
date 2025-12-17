x
// function isOldMiddleware(req,res,next){
//     const age = req.query.age;
//     if(age>=14){
//         next();
//     }
//     else{
//         res.json({
//             "msg":"you are not of age yet"
//         })
//     }
// }
// app.use(isOldMiddleware);
// //instead of doing this what we can do is use app.use(middleware) and all the functions written below it will be automatically able to use it 
// // instead of doing the below thing we do the next thing 
// // app.get('/ride1',isOldMiddleware,function(req,res){
// //    res.json({
// //     "msg":"you have successfully ridden the ride1 "
// //    })
// // })
// app.get('/ride1',function(req,res){
//    res.json({
//     "msg":"you have successfully ridden the ride1 "
//    })
// })
// app.get('/ride2',function(req,res){
//     res.json({
//     "msg":"you have successfully ridden the ride 2"
//    })
// })
// app.listen(3000);


/// assignments qquestions : 
// request count++ everytime an endpoint is being hit 
// let reqCount = 0;
// function incrementReqCount(req,res,next){
//    reqCount++;
//    next();
// }
// app.use(incrementReqCount)
// app.get('/user',function(req,res){
//   res.status(200).json({
//     nam:"john"
//   })
// })
// app.post('/user',function(req,res){
//      res.status(200).json({
//     "msg":"created a dummy user"
//   })
// })
// app.get('/reqCount',function(req,res){
//   res.status(200).json({
//     reqCount
//   })
// })
// app.listen(3000)

const express = require("express");
const app = express();
let reqcount = 0;
function middle(req,res,next){
   
  reqcount++;
  next();
  
}
setInterval(function(req,res){
    if(reqcount>5){
     res.status(404).json({
        "msg":"cannot send next req"
     })
    }
},5000);
app.use(middle)
app.get('/',function(req,res){
 res.json({
    "msg":"hi"
 })
})
app.post('/',function(req,res){
    res.json({
    "msg":"hello"
 })
})
app.get('/hello',function(req,res){
     res.json({
    "msg":"how are youuu"
 })
})
//error handling middleware which we can use 
app.listen(3000)