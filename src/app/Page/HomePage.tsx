import { motion } from "motion/react";
import Image from "next/image";

interface homePageProps {
  handleClickNavigateToPage?: () => void;
}
export function HomePage({ handleClickNavigateToPage }: homePageProps) {
  return (
    <div className="flex flex-col md:flex-row md:h-full mb-24 md:mb-48">
      <div className="w-full md:h-full flex flex-col md:w-1/2 p-4 md:p-12 text-center md:text-left">
        <div className="flex justify-center md:justify-start mb-6 md:mb-0">
          <Image
            src="/assets/logo_1.png"
            width={120}
            height={40}
            alt="logo"
            style={{ objectFit: "contain" }}
            className="md:ml-6"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="flex-grow flex flex-col justify-center gap-4 md:gap-7 p-4 md:py-12 md:px-2">
            <h1 className="text-2xl sm:text-3xl md:text-5xl text-[var(--font-rosa-title)] font-bold italic leading-tight font-poppins">
              TREINE COM A ISA
            </h1>
            <p className="text-[var(--font-rosa-paragraph)] mt-2 md:mt-4 text-pretty text-base sm:text-lg md:text-xl font-poppins">
              Olá! Eu sou <strong> Isabella Viana </strong>, <br /> formada em educação física e atuo <strong> há mais de 3 anos </strong> em treinos personalizados.          
            </p>
            <p className="text-[var(--font-rosa-paragraph)] mt-2 md:mt-4 text-pretty text-base sm:text-lg md:text-xl font-poppins">
              Atendo <strong> presencialmente na academia Orangym </strong> e também de <strong> forma online </strong>, acompanhando aluno de diferentes níveis - desde os iniciantes até os mais avançados.
            </p>
            <p className="text-[var(--font-rosa-paragraph)] mt-2 md:mt-4 text-pretty text-base sm:text-lg md:text-xl font-poppins md:leading-8">
              Minha missão é simples: <strong>Fazer você treinar com propósito, cuidado e estratégia</strong> <br />
              Resultado reais, respeitando sua rotina e o seu momento
            </p>
            <div className="flex justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 md:mt-6 px-6 py-3 w-48 md:w-52 bg-pink-600 text-white font-bold rounded-full hover:bg-pink-700 transition-colors"
                onClick={handleClickNavigateToPage}
              >
                {/* <ButtonComponent
                handleClick={handleClickNavigateToPage}
                
                > */}
                começar
                {/* </ButtonComponent> */}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:mt-16 px-4 md:px-0">
        <div className="w-full max-w-md md:max-w-none">
        <Image
            src="/assets/is-profile.png"
            alt="isabela"
            width={350}
            height={400}
            className="rounded-3xl shadow-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
