import { twMerge } from 'tailwind-merge';

interface InputContainerProps {
  valueLabel:string,
  inputName:string,
  classNameInput?:string,
  classNameLabel?:string,
  value?:string
  onChange:(name:string,e:string) =>void
}

export function InputContainer({classNameInput,valueLabel, inputName, value,onChange}:InputContainerProps){
  return (
    <div className="space-y-2 flex flex-col">
        <label htmlFor="name">{valueLabel}</label>
        <input
          name={inputName}
          type="text"
          placeholder="Seu nome completo"
           value={value ?? ''}
           onChange={(e) => onChange(inputName, e.target.value)} 
           //
          required
          className={twMerge(classNameInput)}
          />
    </div>

  )
}