 
 // this async functions returns a promise syntactical sugar 
 // async function return a promise underhood promise is an obejct which has 3 states fulfilled , pending , rejected 
 // it resolves after sometime in the future till then the js thread executes other things thus it doesnot block the thread 
async function saw(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/2") // fetching async thing 
    const data = await response.json()
    console.log(data)
}
saw();