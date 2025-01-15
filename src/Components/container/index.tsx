import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ContainerProps{
    children: ReactNode,
    className?: string,
}

export function Container({children, className}: ContainerProps){
    return(
        <div className={twMerge("max-w-screen-xl w-full grid grid-cols-2", className)}>
            {children}
        </div>
    )
}