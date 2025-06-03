import type { MyFormData } from "@/app/page";

interface InputComponentText {
  title: string;
  handleSetValue:  (name: keyof MyFormData, value: string) => void;
  field:keyof MyFormData;
  dataForForm?:MyFormData;
}
export function InputComponentText({title,handleSetValue, field, dataForForm}:InputComponentText){
  return (
    <div className="flex flex-col w-3/4">
        <label htmlFor={title} className="mt-5">{title}</label>
        <input 
          type="text" 
          name={title} 
          className="rounded-lg h-9 p-6" 
          value={dataForForm?.[field]} 
          onChange={e=> handleSetValue(field, e.target.value)}/>
    </div>
  )
}

export function InputComponentTextArea({title, handleSetValue, field, dataForForm}:InputComponentText){
  return (
    <div className="flex flex-col w-3/4">
        <label htmlFor={title} className="mt-5">{title}</label>
        <textarea 
          name={title} 
          className=" p-3 rounded-lg h-28 resize-none"
          onChange={e=> handleSetValue(field, e.target.value)}
          value={dataForForm?.[field]} 
          />
    </div>
  ) 
}