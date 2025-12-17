export const Input = ({type,placeholder,h,w,reference,onDone,onx})=>{
    
    return <div><input   maxLength={1} ref = {reference}
    onKeyDown={(e)=>{
         
       if(e.key === "Backspace"){
            // If the input is already empty, move to previous input
            if(e.target.value === ""){
                e.preventDefault();
                onx();
            } else {
                // If input has value, just clear it (stay on current input)
                e.preventDefault();
                e.target.value = "";
            }
        }

    }}
    onChange={(e)=>{
        const num = e.target.value;
        if(num>=0 &&num<=9){
        onDone()}
        else{
            e.target.value = "";
            return;
        }
    }}

    type={type}
    placeholder={placeholder}
    className={`focus:outline-2 focus:outline-slate-300/60 placeholder:text-blue-200 w-9 h-10 bg-cyan-50/20 rounded-xl  border-2 border-cyan-200/10 text-blue-100 text-sm/12font-bold p-3`} />
    </div>
}
