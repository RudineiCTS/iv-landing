import { ButtonComponentSendForm } from "@/components/ButtonComponent";
import {
  InputComponentText,
  InputComponentTextArea,
} from "@/components/InputComponentText";
import { motion } from "motion/react";
import type { RefObject } from "react";
import type { MyFormData } from "../page";
interface FormularioPage {
  archorLinks: RefObject<any>[];
  handleSetValue: (name: keyof MyFormData, value: string) => void;
  formData: MyFormData;
  sendForm: () => void;
}
export function FormularioPage({
  archorLinks,
  handleSetValue,
  formData,
  sendForm,
}: FormularioPage) {
  return (
    <section
      className="mt-20 md:mt-40 flex justify-center items-center flex-col px-4\"
      ref={archorLinks[0]}
    >
      <h1 className="text-2xl sm:text-3xl  md:text-4xl lg:text-5xl font-bold mb-6 text-[var(--font-rosa-title)] text-center font-sans">
        Consultoria
      </h1>
      <div className="w-full max-w-6xl flex flex-col lg:flex-row mt-8 md:mt-14 gap-6 md:gap-7 justify-between mx-auto">
        <div className="w-full lg:w-3/4 bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-4 py-8 md:py-12">
          <div>
            <h2 className="text-[var(--font-rosa-title)] font-bold mb-2 text-sm sm:text-base md:text-lg font-poppins">
              ACOMPANHAMENTO COMPLETO PARA SEU OBJETIVO
            </h2>
            <p className="text-[var(--font-rosa-paragraph)] text-sm sm:text-base  font-poppins">
              Seja você iniciante ou já praticante, estou aqui para te ajudar a
              conquistar resultados reais com segurança e estratégia.
            </p>
          </div>
          <div>
            <h2 className="text-[var(--font-rosa-title)] font-bold mb-2 text-sm sm:text-base md:text-lg  font-poppins">
              Atendimento Presencial
            </h2>
            <p className="text-[var(--font-rosa-paragraph)] text-sm sm:text-base  font-poppins">
              Sessões exclusivas com foco total em você, com correções,
              motivação e técnica profissional. Seu corpo responde quando você
              tem um plano certo. Vamos juntos nessa jornada?
            </p>
          </div>
          <div>
            <h2 className="text-[var(--font-rosa-title)] font-bold mb-2 text-sm sm:text-base md:text-lg  font-poppins">
              Consultoria Online Personalizada
            </h2>
            <p className="text-[var(--font-rosa-paragraph)] text-sm sm:text-base  font-poppins">
              Treinos e orientações sob medida para você treinar de onde
              estiver, com flexibilidade e acompanhamento constante.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 md: w-2/3 md: mx-auto flex justify-center"
          >
            <ButtonComponentSendForm
              title="Enviar Formulário"
              handleSendForm={sendForm}
            />
          </motion.div>
        </div>

        <form className="w-full lg:w-full flex flex-col items-center gap-4">
          <InputComponentText
            title="Nome"
            field="nome"
            handleSetValue={handleSetValue}
            dataForForm={formData}
          />
          <InputComponentText
            title="Email"
            field="email"
            handleSetValue={handleSetValue}
            dataForForm={formData}
          />
          <InputComponentText
            title="Contato"
            field="contato"
            handleSetValue={handleSetValue}
            dataForForm={formData}
          />
          <InputComponentTextArea
            title="Objetivo"
            field="objetivo"
            handleSetValue={handleSetValue}
            dataForForm={formData}
          />
        </form>
      </div>
    </section>
  );
}
