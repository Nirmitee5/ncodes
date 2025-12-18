// function main(){
//   fetch("https://sum-server.100xdevs.com/todos")
//   .then(async (response)=>{
//     const json = await response.json();
//     console.log(json.todos.length)

    
//   })
// }

const axios = require("axios")
async function main2(){
    const response = await axios.get("https://sum-server.100xdevs.com/todos")
    console.log(response.data.todos.length)
}
async function main(){
    const response = await fetch("https://sum-server.100xdevs.com/todos")
    const json = await response.json()
    console.log(json.todos.length)

}
//fetch vs axios 

main()