import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { InputContainer } from "./ui/InputContainer";
import { RadioButtonComponent } from "./ui/RadioButton";
import type UserAnamneseFitnessUI from "@/app/models/UserAnamneseFitness";
import { initialForm, type WorkPosition } from "@/app/models/UserAnamneseFitness";
import "./ui/RadioButton/styles.css";
import { RadioGroup } from "radix-ui";


export function ContainerForm() {
  const [progress, setProgress] = useState(20);
  const [formData, setFormData] = useState<UserAnamneseFitnessUI>(initialForm);

  //e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> 
  function handleChange(inputName: string, valueInput: string) {
    setFormData((prev) => ({
      ...prev,
      [inputName]: valueInput
    }));
  }

  function handleChangeRadioButton(args: { inputName: string, value: string }) {
    console.log(args);
    let valueToObject: WorkPosition | null = null
    if (args.inputName === 'posicao') {
      switch (args.value) {
        case 'Mais em pé':
          valueToObject = 'pe'
          break
        case 'Mais sentado':
          valueToObject = 'sentado'
          break
        case 'Misto (em pé e sentado)':
          valueToObject = 'misto'
          break
          break
      }
      setFormData((prev) => ({
        ...prev,
        workPosition: valueToObject
      }));
    }
    if (args.inputName === 'hasInjury') {
      setFormData((prev) => ({
        ...prev,
        hasInjury: args.value === 'Sim' ? "yes" : "nope"
      }));
    }
    if (args.inputName === 'hasPain') {
      setFormData((prev) => ({
        ...prev,
        hasPain: args.value === 'Sim' ? "yes" : "nope"
      }));
    }
    if (args.inputName === 'takeMedication') {
      setFormData((prev) => ({
        ...prev,
        takeMedication: args.value === 'Sim' ? "yes" : "nope"
      }));
    }
    if (args.inputName === 'likesExercise') {
      if (args.value === 'Sim, gosto muito') {
        setFormData((prev) => ({
          ...prev,
          likesExercise: 'yes'
        }));
      }
      if (args.value === 'Mais ou menos') {
        setFormData((prev) => ({
          ...prev,
          likesExercise: 'moreOrLess'
        }));
      }
      if (args.value === 'Não gosto muito') {
        setFormData((prev) => ({
          ...prev,
          likesExercise: 'nope'
        }));
      }
    }
  }



  function handleSubmitForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (progress != 100) {
      setProgress(progress + 20)
    } else {
      console.log('concluído')
    }
  }

  return (
    <>
      <div className="w-full max-w-2xl mx-auto  text-center">
        <h1 className="text-rosaEscuro text-2xl pb-3">Anamnese Fitness</h1>
        <p className="text-cinzaMedio text-lg max-w-2xl mx-auto">
          Responda nosso questionário completo para criarmos o treino perfeito
          para você. Todas as informações são confidenciais e serão usadas
          apenas para seu planejamento personalizado.
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto shadow-lg border-0  bg-white mt-8 rounded-sm">
        <div className="p-6">
          <Progress value={progress} className="mb-6" />

          <form action="" className="flex flex-col gap-2">
            {progress === 20 ?
              (
                <>
                  <div className="gap-4 flex flex-col ">
                    <InputContainer
                      inputName="name"
                      valueLabel="Nome Completro *"
                      onChange={handleChange}
                      value={formData.name ?? ''}
                      classNameInput="border-2 transition-all duration-200 rounded-2xl p-2"
                    />
                    <div className="space-y-2 flex flex-col">
                      <InputContainer
                        inputName="profession"
                        valueLabel="Qual a sua profissão?*"
                        classNameInput="border-2 transition-all duration-200 rounded-2xl p-2"
                        onChange={handleChange}
                        value={formData.profession}
                      />
                    </div>
                    <div className="space-y-3">
                      <label>Trabalha mais em pé ou sentado? *</label>
                      <RadioGroup.Root
                        className="RadioGroupRoot"
                        value={formData.workPosition}
                        onValueChange={(value) => handleChangeRadioButton({ inputName: "posicao", value })}
                      >
                        <RadioButtonComponent value="Mais em pé" inputName="pe" checked={formData.workPosition === "pe"} />
                        <RadioButtonComponent value="Mais sentado" inputName="se" checked={formData.workPosition === "sentado"} />
                        <RadioButtonComponent value="Misto (em pé e sentado)" inputName="pe-se" checked={formData.workPosition === "misto"} />
                      </RadioGroup.Root>
                    </div>
                  </div>
                </>
              ) : progress === 40 ?
                (
                  <>
                    <div className="space-y-3 gap-2">
                      <label>Tem alguma lesão ou restrição médica? *</label>
                      <RadioGroup.Root
                        className="RadioGroupRoot"
                        value={formData.workPosition}
                        onValueChange={(value) => handleChangeRadioButton({ inputName: "hasInjury", value })}
                      >
                        <RadioButtonComponent value="Sim" inputName="yes" checked={formData.hasInjury === "yes"} />
                        <RadioButtonComponent value="Não" inputName="nope" checked={formData.hasInjury === "nope"} />
                      </RadioGroup.Root>
                      {formData.hasInjury === "yes" ?
                        (
                          <>
                            <div className="w-auto bg-[#f5f5f5] flex rounded-md mb-4 w">
                              {/* #f5f5f5 */}
                              <input type="text" name="" id="" className="bg-transparent rounded-md p-3 w-full" placeholder="Descreva suas lesões e restrições medicas ..." />
                            </div>
                          </>
                        ) :
                        (
                          <></>
                        )
                      }
                    </div>
                    <div className="space-y-3">
                      <RadioGroup.Root
                        className="RadioGroupRoot"
                        value={formData.workPosition}
                        onValueChange={(value) => handleChangeRadioButton({ inputName: "hasPain", value })}
                      >
                        <label>Sente alguma dor no seu dia a dia *</label>
                        <RadioButtonComponent value="Sim" inputName="yes" checked={formData.hasPain === 'yes'} />
                        <RadioButtonComponent value="Não" inputName="nope" checked={formData.hasPain === 'nope'} />
                      </RadioGroup.Root>
                      {formData.hasPain === 'yes' ?
                        (
                          <>
                            <div className="w-auto bg-[#f5f5f5] flex rounded-md mb-4 w">
                              {/* #f5f5f5 */}
                              <input type="text" name="" id="" className="bg-transparent rounded-md p-3 w-full" placeholder="Descreva suas lesões e restrições medicas ..." />
                            </div>
                          </>
                        ) :
                        (
                          <></>
                        )
                      }
                    </div>
                    <div className="space-y-3">
                      <label>Faz uso contínuo de algum medicamento ?*</label>
                      <RadioGroup.Root
                        className="RadioGroupRoot"
                        value={formData.workPosition}
                        onValueChange={(value) => handleChangeRadioButton({ inputName: "takeMedication", value })}
                      >
                        <RadioButtonComponent value="Sim" inputName="yes" checked={formData.takeMedication === 'yes'} />
                        <RadioButtonComponent value="Não" inputName="nope" checked={formData.takeMedication === 'nope'} />
                      </RadioGroup.Root>
                      {formData.takeMedication === 'yes' ?
                        (
                          <>
                            <div className="w-auto bg-[#f5f5f5] flex rounded-md mb-4 w">
                              {/* #f5f5f5 */}
                              <input type="text" name="" id="" className="bg-transparent rounded-md p-3 w-full" placeholder="Descreva suas lesões e restrições medicas ..." />
                            </div>
                          </>
                        ) :
                        (
                          <></>
                        )
                      }
                    </div>
                  </>
                ) : progress === 60 ?
                  (
                    <>
                      <div className="space-y-3">
                        <label>Gosta de praticar atividade fisica ?*</label>
                        <RadioGroup.Root
                          className="RadioGroupRoot"
                          value={formData.workPosition}
                          onValueChange={(value) => handleChangeRadioButton({ inputName: "likesExercise", value })}
                        >
                          <RadioButtonComponent value="Sim, gosto muito" inputName="yes" checked={formData.likesExercise === 'yes'} />
                          <RadioButtonComponent value="Mais ou menos" inputName="moreOrLess" checked={formData.likesExercise === 'moreOrLess'} />
                          <RadioButtonComponent value="Não gosto muito" inputName="nope" checked={formData.likesExercise === 'nope'} />
                        </RadioGroup.Root>
                        {
                          formData.likesExercise === 'yes' || formData.likesExercise === 'moreOrLess' ? (
                            <>
                              <label>Quais atividade já praticou ?*</label>
                              <div className="w-auto bg-[#f5f5f5] flex rounded-md mb-4 w">
                                {/* #f5f5f5 */}
                                <input type="text" name="" id="" className="bg-transparent rounded-md p-3 w-full" placeholder="Descreva suas lesões e restrições medicas ..." />
                              </div>
                              <label>Há quanto tempo praticou ou pratica essas atividades ?*</label>
                              <div className="w-auto bg-[#f5f5f5] flex rounded-md mb-4 w">
                                {/* #f5f5f5 */}
                                <input type="text" name="" id="" className="bg-transparent rounded-md p-3 w-full" placeholder="Descreva suas lesões e restrições medicas ..." />
                              </div>
                              </>
                              ):(
                              <></>
                              )
                          }
                        </div>
                      </>
                      ):<></>
                    }
                      <div className="mt-6 flex justify-end">
                        <button
                          className="bg-[#D2386C] p-2 rounded-sm text-[#F7CAC9] cursor-pointer"
                          onClick={e => handleSubmitForm(e)}
                        >
                          {" "}
                          Próximo{" "}
                        </button>
                      </div>
                    </form>
        </div>
      </div>
    </>
  );
}

