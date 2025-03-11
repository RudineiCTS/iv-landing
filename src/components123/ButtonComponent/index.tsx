import { ReactNode } from "react"
import { IconType } from "react-icons"

interface ButtonComponentProps{
    children: ReactNode
    icon: ReactNode
    handleClick:()=>void
}
export function ButtonComponent({children, icon, handleClick}:ButtonComponentProps){
    return (
        <div onClick={handleClick} className="w-48 bg-rosaEscuro h-10 rounded-full text-white flex justify-evenly items-center cursor-pointer">
            {children}
            {icon}
        </div>
    )
}