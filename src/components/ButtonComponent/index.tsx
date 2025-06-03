import { ReactNode } from "react"
import { IconType } from "react-icons"
import { twMerge } from "tailwind-merge";

interface ButtonComponentProps{
    children: ReactNode
    icon?: ReactNode
    className?:string;
    handleClick?:()=>void
    handleSendForm?:()=> void
}
interface ButtonComponentSendFormProps{
    title:string;
    handleSendForm?:()=> void
}
export function ButtonComponent({children, icon, handleClick, className}:ButtonComponentProps){
    return (
        <div onClick={handleClick}className={twMerge("w-48 bg-rosaEscuro h-10 rounded-full text-white flex justify-evenly items-center cursor-pointer", className)}>
            {children}
            {icon}
        </div>
    )
}

export function ButtonComponentSendForm({title, handleSendForm}:ButtonComponentSendFormProps){
    return (
        
        <div className={twMerge("bg-[var(--color-primary)] p-4 rounded-2xl cursor-pointer")} onClick={handleSendForm}>
            <strong className="text-white px-2">{title}</strong>
        </div>
    )
}