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
    <div className="w-full max-w-6xl flex flex-col lg:flex-row mt-8 md:mt-14 gap-6 md:gap-7 mx-auto justify-center"> 
      <div className="w-full lg:w-3/4 bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-4 py-8 md:py-12">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--font-rosa-title)] mb-2 md:mb-3 font-poppins"> Quer elevar o nível de seus treinos? </h1>
        <p className="text-[var(--font-rosa-paragraph)] text-sm sm:text-base  font-poppins">
          Preencha o formulário abaixo com suas informações e em breve entro em contato com você
        </p>
          <form action="" className="w-full lg:w-full flex flex-col items-center gap-4">
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
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
             <ButtonComponentSendForm title="Enviar Formulário"  handleSendForm={sendForm} />
              </motion.div>
          </form>
          </div>
        </div>

   </section>
   
  );
}
