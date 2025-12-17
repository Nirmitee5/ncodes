
// in order to incorporate asynchronous calls into the recoil , we use selectors ,
// atoms cant directly cmake use of async functions but selectors can so use selectors inside an atom
import { atom, selector } from "recoil";
import  axios from "axios"
export const notificationCount = atom({
    key  : "not",
    default : selector({
        key:"selee",
        get : async ()=>{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/2")
            return response.data;
        }
    })

})
