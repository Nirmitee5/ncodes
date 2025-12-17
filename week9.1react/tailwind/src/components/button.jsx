export const Button = ({disable,children,onClick})=>{
    return <span onClick={onClick} className = {`rounded-2xl cursor-pointer   text-blue-50 font-bold  px-32 py-3
${disable ? "bg-slate-300/60" : "bg-slate-300/50 "}`}>
        {children}
    </span>
}