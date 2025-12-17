//debounce is basically when multiple requests are being sent to the backend but it requires execution just once 
// example : amazon website so in search bar if the user is typing very fast it then it waits for the user to type the thing completely and then finally sends a request
let clock;
function backendServer(){
    console.log("request sent to backend ");
    
}
function debouncedBackend(){
  clearTimeout(clock)// previous clock stopped and new clock will start 
  clock = setTimeout(backendServer,30) // several debounce are called it will clear the clock again and again until final debug function works
}
debouncedBackend()
debouncedBackend() // here debounce is called multiple times 
debouncedBackend()
debouncedBackend()
debouncedBackend()