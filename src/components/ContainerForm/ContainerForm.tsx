import { InputContainer } from "./ui/InputContainer";
import { RadioButtonComponent } from "./ui/RadioButton";
import { Progress } from "@/components/ui/progress"

export function ContainerForm(){
  return(
    <>
        <div className="w-full max-w-2xl mx-auto  text-center">
          <h1 className="text-rosaEscuro text-2xl pb-3" >Anamnese Fitness</h1>
          <p className="text-cinzaMedio text-lg max-w-2xl mx-auto">Responda nosso questionário completo para criarmos o treino perfeito para você. Todas as informações são confidenciais e serão usadas apenas para seu planejamento personalizado.</p>
        </div>

        <div  className="w-full max-w-2xl mx-auto shadow-lg border-0  bg-white mt-8 rounded-sm" > 
          <div className="p-6">
          <Progress value={33} className="mb-6" />
          

            <form action="">
              <div className="gap-4 flex flex-col ">
                <InputContainer 
                  inputName="nomeInput"
                  valueLabel="Nome Completro *"
                  classNameInput="border-2 transition-all duration-200 rounded-2xl p-2"
                />
              <div className="space-y-2 flex flex-col">
                <InputContainer 
                  inputName="nomeInput"
                  valueLabel="Nome Completro *"
                  classNameInput="border-2 transition-all duration-200 rounded-2xl p-2"
                />
              </div>
              <div className="space-y-3">
                <label>Trabalha mais em pé ou sentado? *</label>
                  <RadioButtonComponent value="Mais em pé" inputName="pe" />
                  <RadioButtonComponent value="Mais sentado" inputName="se" />
                  <RadioButtonComponent value="Misto (em pé e sentado)" inputName="pe-se" />
                </div>
              </div>          
            </form> 
          </div>
        </div>
    </>
    )
}