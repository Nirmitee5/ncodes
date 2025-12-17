import { atom ,selector} from "recoil";
// here atom is defined and it is a function which takes two things 
// first one is a default value which will be used to initiaze the variable and the next one is a key which will uniquely identify the atom
//  export const CounterAtom = atom({
//     default : 0,
//     key : "counter"
// })
export const networkCount = atom({
    default : 0,
    key : "network"
})
export const jobCount = atom({
    default : 0,
    key : "jobs"
})
export const messageCount = atom({
    default : 0,
    key : "message"
})
export const notificationCount = atom({
    default : 0,
    key : "noti"
})
export const IsEvenSelector = selector({
    key : "evenselector",
    get : function({get}){
        const even = get(CounterAtom)
        if(even%2==0) return true;
        else return false;
    }
})
export const mePart = selector({
    key : "mepart",
    get : function ({get}){
        const total = get(networkCount)
        const x = get(notificationCount)
        const y = get(jobCount)
        const complete = total + x + y
        return complete;
    }
})