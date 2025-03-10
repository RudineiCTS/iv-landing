import { twMerge } from "tailwind-merge";

interface HeaderComponentProps {
  switchPage: (e:string) => void;
  className: string;
}
export function HeaderComponent({switchPage, className}:HeaderComponentProps ) {
  function handleSwitchPage(e:string){
    // console.log(e)
    switchPage(e);
  }
  return (
    <div
      className={twMerge("flex max-w-xl mt-20 ml-10 gap-10 text-rosaEscuro", className)}
    >
      <h1 className="cursor-pointer" id='home' onClick={(e)=>handleSwitchPage((e.target as HTMLAnchorElement).id)}>Home</h1>
      <h1 className="cursor-pointer" id="consultancy"onClick={(e)=>handleSwitchPage((e.target as HTMLAnchorElement).id)} >Consultoria</h1>
      <h1 className="cursor-pointer" id="about" onClick={(e)=>handleSwitchPage((e.target as HTMLAnchorElement).id)}> Sobre </h1>
    </div>
  );
}
