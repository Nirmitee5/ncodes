const express = require("express")
const app = express()
app.use(express.json());
let todos = []

app.post('/',function(req,res){
    const b = req.body.b;
    const id = Math.random();
    const obj = {
        title:b,
        id : id
    }
    todos.push(obj);
    res.json({
       " message":"todo added successfully"
    })
    
});
app.get('/',function(req,res){
    res.json({todos})
})
app.delete('/',function(req,res){
    const n = req.body.n;
    const idx = todos.findIndex((todos)=>todos.id === n);
    todos.splice(idx,1);
    res.json({
        message : "todo deleted successfully"
    })
})
app.listen(3000)




