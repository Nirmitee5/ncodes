//Axios is a JavaScript library used to make HTTP requests — like GET, POST, PUT, DELETE — to APIs or backend servers.It’s basically a nicer, cleaner alternative to the built-in fetch() function.
import axios from 'axios';
async function saw() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/2")
        console.log(response.data)
    }
    catch (err) {
        console.log("there is an error ")
    }
}
saw();