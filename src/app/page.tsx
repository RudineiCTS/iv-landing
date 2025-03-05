
'use client'
import { BackgroundPage } from "@/Components/backgroundPage";
import { ButtonComponent } from "@/Components/ButtonComponent";
import { Container } from "@/Components/container";
import { HeaderComponent } from "@/Components/HerdarComponent";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {FaArrowRight} from 'react-icons/fa'
export default function Home() {
  const useNavigate = useRouter();


  function handleSwitchPage(){
    useNavigate.push('/contact')
  }
  function handleSwitchPageInHeader(e:string){
    console.log(e)
    switch (e) {
      case 'home':
        useNavigate.push('/')
        break;
      case 'consultancy':
        useNavigate.push('/contact')
        break;
      case 'about':
        useNavigate.push('/about')
        break;
      default:
    }
  }
  return (
    <BackgroundPage>
      <Container className="gap-10">
        <div>
          <Image
            src={"/assets/logo_1.png"}
            width={150}
            height={50}
            alt="logo"
            style={{ objectFit: "contain" }}
            className="ml-6"
          />
          <HeaderComponent 
            switchPage={handleSwitchPageInHeader}
          />

          <div className="flex flex-col gap-16 h-4/5 justify-center ml-10">
            <h1 className="font-bold text-6xl">Personal Trainer</h1>

            <strong className=" font-bold text-3xl">
              Transforme seus objetivos em resultados reais, com suporte
              especializado
            </strong>

            <p className="text-xl">
              Com mais de 10 anos de experiência, já ajudei pessoas comuns e
              atletas a alcançarem seus objetivos.Agora, como seu Personal
              Trainer Online, estou pronto para fazer o mesmo por você
            </p>

            <ButtonComponent
              handleClick={handleSwitchPage}
              icon={<FaArrowRight />}
            >Começar</ButtonComponent>
          </div>
        </div>
        <div className="self-center justify-self-center pr-32">
          <Image
            src={"/assets/isabela_background.svg"}
            alt="isabela"
            width={640}
            height={770}
          />
        </div>
      </Container>
    </BackgroundPage>
  );
}
