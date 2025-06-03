import { ButtonComponentSendForm } from "@/components/ButtonComponent";
import { InputComponentText, InputComponentTextArea } from "@/components/InputComponentText";
import type { RefObject } from "react";
import type { MyFormData } from "../page";

interface FormularioPage{
  archorLinks:RefObject<any>[];
  handleSetValue: (name: keyof MyFormData, value: string) => void
  formData: MyFormData;
  sendForm: ()=>void;
}
export function FormularioPage({archorLinks, handleSetValue, formData, sendForm}:FormularioPage){
  return (
    <section className="mt-40 flex justify-center items-center flex-col" ref={archorLinks[0]}>
    <h1 className="text-4xl font-bold mb-6 text-[var(--font-rosa-title)] ">Consultoria</h1>
      <div className="w-4/5 flex flex-row mt-14 gap-7 justify-between mx-auto">
        <div className="w-3/4 bg-white rounded-2xl p-6 flex flex-col gap-4 md:h-auto py-12 " >
        <div>
          <h2 className="text-[var(--font-rosa-title)] font-bold mb-1">ACOMPANHAMENTO COMPLETO PARA SEU OBJETIVO</h2>
          <p className="text-[var(--font-rosa-paragraph)]">Seja você iniciante ou já praticante, estou aqui para te ajudar a conquistar resultados reais com segurança e estratégia.</p>
        </div>
        <div>
          <h2 className="text-[var(--font-rosa-title)] font-bold mb-1">Atendimento Presencial</h2>
          <p  className="text-[var(--font-rosa-paragraph)]">Sessões exclusivas com foco total em você, com correções, motivação e técnica profissional.
          Seu corpo responde quando você tem um plano certo. Vamos juntos nessa jornada? </p>
        </div>
        <div>
          <h2 className="text-[var(--font-rosa-title)] font-bold mb-1">Consultoria Online Personalizada</h2>
          <p  className="text-[var(--font-rosa-paragraph)]">Treinos e orientações sob medida para você treinar de onde estiver, com flexibilidade e acompanhamento constante.</p>
        </div>
        <ButtonComponentSendForm title="Enviar Formulário" handleSendForm={sendForm}/>
      </div>
      
      <form className="w-full justify-items-center">
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
  )
}