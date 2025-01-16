import { twMerge } from "tailwind-merge"


interface HeaderComponentProps{
    className?: string,
}

export function HeaderComponent({className}: HeaderComponentProps){
    return (
        <div className={twMerge("w-full flex justify-end gap-5 mb-10", className)}>
            <a href="#" className=" mr-12 text-xl text-rosaEscuro hover:text-rosa">
                Inicio
            </a>
            <a href="#" className="text-xl text-rosaEscuro hover:text-rosa">
                Sobre
            </a>
            <a href="#" className="text-xl text-rosaEscuro hover:text-rosa">
                Contato
            </a>
            {/* <a href="#" className="text-rosaEscuro hover:text-rosa">
                login
            </a> */}
        </div>
    )
}