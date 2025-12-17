import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil"// recoil is a library which helps in better state management it makes use of atoms and selectors 
import { CounterAtom, IsEvenSelector, mePart, notificationCount } from './store/atoms/counter'
import { useEffect, useEffectEvent } from "react"
export default function App(){
  return <RecoilRoot>
    <Buttons/>
    <Counters/>
    <Iseven/>
    <Notifications/>
    <Network/>
    <Jobs/>
    <Messages/>
    <Mepart/>
  </RecoilRoot>
}
function Notifications(){
  const [notify,setNotify] = useRecoilState(notificationCount)
  useEffect(()=>{
    setInterval(() => {
      setNotify(n=>n+1)
    }, 7000);
  },[])
  return <div>
    <button>{notify}</button>
  </div>
}
function Notifications(){
  const [notify,setNotify] = useRecoilState(notificationCount)
  useEffect(()=>{
    setInterval(() => {
      setNotify(n=>n+1)
    }, 7000);
  },[])
  return <div>
    <button>{notify}</button>
  </div>
}
function Buttons(){
 const setcount = useSetRecoilState(CounterAtom)
 function increases(){
  setcount(c=>c+2)
 }
 function decreases(){
  setcount(c=>c-1)
 }
 return <div>
  <button onClick={increases}>increase</button>
  <button onClick={decreases}>decrease</button>
 </div>
}
function Counters(){
  const count = useRecoilValue(CounterAtom)
  return <div>
    {count}
  </div>
}
function Iseven(){
  const no = useRecoilValue(IsEvenSelector)
  return <div>
    {no ? "even" : "false"}
  </div>
}
function Mepart(){
  const t = useRecoilValue(mePart)
  return <div>
    {t %2 ==0 ? "evenn" : " odd"}
  </div>
}

