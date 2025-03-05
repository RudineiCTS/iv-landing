import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface BackgroundPageProps {
    children: ReactNode,
    className?:string,

}
export function BackgroundPage({children, className}:BackgroundPageProps){
    return (
        <div className={twMerge("w-ful min-h-screen h-screen flex p-8", className)} style={{
            backgroundImage: `url('./assets/background_desktop.png')`,
            backgroundSize: "cover", 
            backgroundPosition: "center", 
          }}>
            {children}
        </div>
    )
}