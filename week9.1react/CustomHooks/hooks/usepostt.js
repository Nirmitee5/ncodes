import { useState,useEffect } from "react";
// export function usePost(){
//   const [posts,setpost] = useState({});
//   async function getPosts(){ // async await is just a syntax sugar that make aynchronous code look like synchronous code
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")//fetch returns a promise 
//     const jsonobj = await response.json(); // this promise later resolves into json 
//     setpost(jsonobj)
//   }
//   useEffect(()=>{
//     getPosts() // Important: useEffect callback must not be marked async because async makes the callback return a Promise, and React expects either undefined or a cleanup function. Instead, define an async function inside the effect and call it.
//   },[]);
//   return posts;
// }
export function useFetch(url){ // usefetch gets new url everytime 
  const[data,setData] = useState({})
  const[loading,setLoading] = useState(true)
  async function getdetails(){
    setLoading(true)
    const response =  await fetch(url)
    const json = await response.json();
    setData(json)
    setLoading(false)
  }
  useEffect(()=>{
    getdetails()
  },[url]) // make use of dependency array : everytime url changes getdetails gets called and new json from the backend comes
  return { data,loading};
}