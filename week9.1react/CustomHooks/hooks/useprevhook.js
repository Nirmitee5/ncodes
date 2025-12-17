import { useEffect, useRef } from "react";
export  function usePrev(value){
   const ref = useRef();
   useEffect(()=>{
    ref.current = value;
   },[value])
   return ref.current;
}
// rule of react : first it will return then the effect will return 
// so we have created a reference which will persists its value across re-renders and when the value changes it does not re-render 
// using useEffect() whenever the value changes ref gets updated 
