import { BackgroundPage } from "@/Components/backgroundPage";
import { Container } from "@/Components/container";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
export default function Home() {
  return (
      <BackgroundPage>
        <Container className="gap-10">
          <div className="flex flex-col justify-between -mt-10">
            <Image
              src="/assets/logo_bw_70.png"
              width={750}
              height={750}
              alt="logo personal"
              className=""
              />
          <div>
            <h1 className="text-6xl font-bold pb-4">Isabela Viana</h1>
            <span className="text-2xl">
              Transforme seus objetivos em resultados reais, com suporte
              especializado.
            </span>
            <p>
              Com mais de 10 anos de experiência, já ajudei pessoas comuns e
              atletas a alcançarem seus objetivos.Agora, como seu Personal
              Trainer Online, estou pronto para fazer o mesmo por você.
            </p>
          </div>
          <div  className="w-60 h-16 bg-rosaEscuro rounded-full text-rosaSuave flex items-center justify-center relative">
                <button className="w-full">
                   começar
                </button>
                <FaArrowRight width={20} className="absolute right-7"/>
          </div>
        </div>

          <div>
            <Image
            src={'/assets/isabela_2_sf.png'}
            width={580}
            height={700}
            alt="modelo"
            />
          </div>
        </Container>
      </BackgroundPage>
  );
}
