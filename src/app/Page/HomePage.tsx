
import { ButtonComponent } from "@/components/ButtonComponent";
import Image from "next/image";

interface homePageProps{
  handleClickNavigateToPage?: ()=>void
}
export function HomePage({handleClickNavigateToPage}:homePageProps){
  return (
    <div className="md:flex md:h-full mb-48">
    <div className="w-full md:h-full md:flex-col md:flex md:w-1/2 p-6 md:p-12 text-center md:text-left">
      <Image
        src={"/assets/logo_1.png"}
        width={150}
        height={50}
        alt="logo"
        style={{ objectFit: "contain" }}
        className="ml-6"
        />
        <div className="flex-grow md:flex md:flex-col justify-center gap-7 p-6 md:p-12  md:text-left ">
          <h1 className="text-3xl md:text-5xl text-[var(--font-rosa-title)]  font-bold italic">
            TREINE COM A ISA
          </h1>
          <p className="text-lg md:text-2xl font-semibold text-[var(--font-rosa-paragraph)] mt-4 ">
            Transforme seus objetivos em resultados reais, com suporte
            especializado.
          </p>
          <p className="text-[var(--font-rosa-paragraph)] mt-4 text-pretty text-xl">
            Meu nome é Isabella Viana, e sou personal trainer, e estou aqui
            para ajudar você alcançar seus objetivos
          </p>
          <ButtonComponent
            handleClick={handleClickNavigateToPage}
            className="mt-6 px-6 py-3 md:w-52 md:bg-pink-600 md:text-white font-bold rounded-full bg-white text-pink-500"
            >
            começar 
          </ButtonComponent>
        </div>
    </div>
    <div className="w-full md:w-1/2 md:mt-16">
      <Image
        src={"/assets/isabela_background.svg"}
        alt="isabela"
        width={540}
        height={670}
      />
    </div>
</div>
  )
}