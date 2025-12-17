import { useRef } from "react"
import { Button } from "./button"
import { Input } from "./input"

export const Otp = ()=>{
    const ref1 = useRef();
const ref2 = useRef();
const ref3 = useRef();
const ref4 = useRef();
const ref5 = useRef();
const ref6 = useRef();

    return <div>
    <div className="flex flex-col items-center space-y-9 mt-6">
    <div className="flex space-x-2">
    <Input reference = {ref1} onDone = {()=>{
        ref2.current.focus();
    }} onx = {()=>{
        
        ref1.current.focus()
    }}    type = "text" placeholder = "" h = {4} w = {4}></Input>
    <Input reference = {ref2} onDone = {()=>{
        
        ref3.current.focus();
    }} onx = {()=>{
       
        ref1.current.focus()
    }}  type = "text" placeholder = "" h = {4} w = {4}></Input>
    <Input reference = {ref3} onDone = {()=>{
        ref4.current.focus();
    }} onx = {()=>{
        
        ref2.current.focus()
    }}  type = "text" placeholder = "" h = {4} w = {4}></Input>
    <Input reference = {ref4} onDone = {()=>{
        ref5.current.focus();
    }} onx = {()=>{
       
        ref3.current.focus()
    }}  type = "text" placeholder = "" h = {4} w = {4}></Input>
    <Input reference = {ref5} onDone = {()=>{
        ref6.current.focus();
    }} onx = {()=>{
     
        ref4.current.focus()
    }}  type = "text" placeholder = "" h = {4} w = {4}></Input>
    <Input reference = {ref6} onDone = {()=>{
       
    }} onx = {()=>{
       
        ref5.current.focus()
    }} type = "text" placeholder = "" h = {4} w = {4}></Input>
    </div>
  <Button disable={true}>Verify</Button>
</div>
    </div>
}
