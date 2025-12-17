const express = require("express")
const app = express();
app.use(express.json())
const users = [{
    names:"john",
    kidneys :[ {
        healthy:true
    }]
}]
app.get('/',function(req,res){
   const arr = users[0].kidneys;
   const noOfkidneys = arr.length;
   
   const healthyKidneys = arr.filter((kidney)=>{
     return kidney.healthy === true
   });
   const unhealthyKidneys = noOfkidneys-healthyKidneys.length;
   res.json({
    "healthykidneys" : healthyKidneys.length,
    "unhealthyKidneys":noOfkidneys-healthyKidneys.length,
    "total kidneys ":noOfkidneys
   })
})
app.post('/',function(req,res){
    const newKidney = req.body.newKidney;
    const nk = {
        healthy:newKidney
    }
    users[0].kidneys.push(nk);
    res.json({
        "message":"kidney added successgully"
    })
})
app.put('/',function(req,res){
    const kidney = users[0].kidneys;
    for(let i = 0;i<kidney.length;i++){
        if(kidney[i].healthy===false){
            kidney[i].healthy=true;
        }
    }
    res.json({
        "message" : "all kidneys are now healthy :)"
    })
  
})
app.delete('/',function(req,res){
    users[0].kidneys = users[0].kidneys.filter((kid)=>((kid.healthy===true)))
    res.json({
        "message" : "deleted all the unhealthy kidneys :)"
    })
})
app.listen(3000)

