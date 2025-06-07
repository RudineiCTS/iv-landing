import { ReactNode } from "react"
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
        <button 
            onClick={handleClick}
            className={twMerge(
                "w-40 sm:w-48 bg-[var(--color-primary)] h-10 md:h-12 rounded-full text-white flex justify-center items-center gap-2 cursor-pointer hover:bg-pink-700 transition-colors font-medium text-sm md:text-base", 
                className
            )}
        >
            {children}
            {icon}
        </button>
    )
}

export function ButtonComponentSendForm({title, handleSendForm}:ButtonComponentSendFormProps){
    return (
        <button 
            className="bg-[var(--color-primary)] p-3 md:p-4 rounded-xl md:rounded-2xl cursor-pointer hover:bg-pink-700 transition-colors w-full sm:w-auto"
            onClick={handleSendForm}
        >
            <strong className="text-white px-2 text-sm md:text-base">{title}</strong>
        </button>
    )
}