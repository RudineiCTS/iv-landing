"use client";
import { BackgroundPage } from "@/components/backgroundPage";
import "./globals.css";


export type MyFormData = {
  nome: string;
  email: string;
  objetivo: string;
  contato:string;
};


import { MetodologiaPage } from "./Page/MetodologiaPage";
import { FormularioPage } from "./Page/FormularioPage";
import { HomePage } from "./Page/HomePage";
import { useRef, useState } from "react";
export default function Home() {
  const [formData, setFormData] = useState<MyFormData>({
    nome: '',
    email: '',
    objetivo: '',
    contato:''
  });
  function handleSetValue(name: keyof MyFormData, value: string) {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  const sectionRef = useRef<HTMLDivElement| null>(null);

  const scrollToSection = () =>{
    sectionRef.current?.scrollIntoView({behavior:'smooth'})
  }

  const sendFormToContactWA = ()=>{
    const phoneNumber = process.env.VITE_P   HONE_NUMBER;
    const message = encodeURIComponent(
      `Olá, meu nome é ${formData.nome}\n` +
      `Meu objetivo é:\n${formData.objetivo}\n\n` +
      `Meus contatos são:\n${formData.contato}\n${formData.email}`
    );
  
      const url = `https://wa.me/${phoneNumber}?text=${message}`;
      console.log(`https://wa.me/${phoneNumber}?text=${message}`);

      window.open(url, '_blank');
  }
      return (
      <>
        <BackgroundPage className="">
          <div className="md:w-[1440px] flex flex-col justify-center items-center mx-auto">
          <HomePage handleClickNavigateToPage={scrollToSection}/>
          <MetodologiaPage />
          <FormularioPage 
            archorLinks={[sectionRef]} 
            handleSetValue={handleSetValue}
            formData={formData}
            sendForm={sendFormToContactWA}
          />
          </div> 
        </BackgroundPage>
      </>
  );
}
