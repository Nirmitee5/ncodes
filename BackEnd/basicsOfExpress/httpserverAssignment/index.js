const express = require("express")
const app = express();

function middlewareCheck(req,res,next){

 console.log(req.hostname)
 console.log(req.method)
 console.log(new Date())
 next();
  
}
app.use(middlewareCheck)
// you can get the parameters in two ways so in the url 
// 1)you can write http://localhost:3000/multiply?a=10&b=40
app.get('/multiply',function(req,res){
  const a = req.query.a;
  const b = req.query.b;
  const c = a*b;
  res.json({
    "ans is ":c
  })
})
// 2)you can write http://localhost:3000/square/30/40
// app.get('/square/:a/:b',function(req,res){
//   const a = parseInt(req.params.a);
  
//   const b = parseInt(req.params.b);
//   const c = a*a;
//   const d = b*b;
//   res.json({
//     "square of first no  is  ":c,
//     "square of second no is  ":d

//   })
// })
app.get('/add',function(req,res){
  const a = req.query.a;
  
  const b = req.query.b;
  const c = Number(a)+Number(b);
  res.json({
    "suqare ofis ":c
  })
})
app.get('/divide',function(req,res){
  const a = req.query.a;
  const b = req.query.b;
  const c = a/b;
  res.json({
    "ans is ":c
  })
})
app.get('/subtract',function(req,res){
  const a = req.query.a;
  const b = req.query.b;
  const c = a-b;
  res.json({
    "ans is ":c
  })
})

//2nd middleware is express.json() here it parses the body
// https only can send strings raw text and stuff it does not send js object so that why yu need to parse them 
// into javascript obj
app.use(express.json())
app.post('/hithere',function(req,res){
     const x = req.body.x;
     const y = req.body.y;
     res.json({
      "message":x,
      "message2":y
     })
})
app.listen(3000)