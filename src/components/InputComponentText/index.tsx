import type { MyFormData } from "@/app/page";

interface InputComponentText {
  title: string;
  handleSetValue:  (name: keyof MyFormData, value: string) => void;
  field:keyof MyFormData;
  dataForForm?:MyFormData;
}

export function InputComponentText({title,handleSetValue, field, dataForForm}:InputComponentText){
  return (
    <div className="flex flex-col w-full max-w-md">
      <label htmlFor={title} className="mt-4 md:mt-5 mb-2 text-sm md:text-base font-medium text-gray-700">
        {title}
      </label>
      <input 
        type="text" 
        name={title} 
        className="rounded-lg h-10 md:h-12 p-3 md:p-4 border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors text-sm md:text-base" 
        value={dataForForm?.[field]} 
        onChange={e=> handleSetValue(field, e.target.value)}
      />
    </div>
  )
}

export function InputComponentTextArea({title, handleSetValue, field, dataForForm}:InputComponentText){
  return (
    <div className="flex flex-col w-full max-w-md">
      <label htmlFor={title} className="mt-4 md:mt-5 mb-2 text-sm md:text-base font-medium text-gray-700">
        {title}
      </label>
      <textarea 
        name={title} 
        className="p-3 md:p-4 rounded-lg h-24 md:h-32 resize-none border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors text-sm md:text-base"
        onChange={e=> handleSetValue(field, e.target.value)}
        value={dataForForm?.[field]} 
      />
    </div>
  ) 
}