import { twMerge } from 'tailwind-merge';

interface InputContainerProps {
  valueLabel:string,
  inputName:string,
  classNameInput?:string,
  classNameLabel?:string
}

export function InputContainer({classNameInput,valueLabel}:InputContainerProps){
  return (
    <div className="space-y-2 flex flex-col">
        <label htmlFor="name">{valueLabel}</label>
        <input
          id="name"
          type="text"
          placeholder="Seu nome completo"
           // value={formData.name}
           // onChange={(e) => handleChange('name', e.target.value)} 
           //
          required
          className={twMerge(classNameInput)}
          />
    </div>

  )
}