"use client";
import { BackgroundPage } from "@/components/backgroundPage";
import "./globals.css";

export type MyFormData = {
  nome: string;
  email: string;
  objetivo: string;
  contato: string;
};

import { useRef, useState } from "react";
import { FormularioPage } from "./Page/FormularioPage";
import { HomePage } from "./Page/HomePage";
import { MetodologiaPage } from "./Page/MetodologiaPage";
import { FormClient } from "./Page/hidden_page/FormClient";

export default function Home() {
  const [formData, setFormData] = useState<MyFormData>({
    nome: "",
    email: "",
    objetivo: "",
    contato: "",
  });

  function handleSetValue(name: keyof MyFormData, value: string) {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendFormToContactWA = () => {
    const tell = "5517991035529";
    const message = encodeURIComponent(
      `Olá, meu nome é ${formData.nome}\n` +
        `Meu objetivo é:\n${formData.objetivo}\n\n` +
        `Meus contatos são:\n${formData.contato}\n${formData.email}`
    );

    const url = `https://wa.me/5517991035529?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <BackgroundPage className="">
        <div className="w-full max-w-7xl flex flex-col justify-center items-center">
          {/* <HomePage handleClickNavigateToPage={scrollToSection} />
          <MetodologiaPage />
          <FormularioPage
            archorLinks={[sectionRef]}
            handleSetValue={handleSetValue}
            formData={formData}
            sendForm={sendFormToContactWA}
          /> */}
          <FormClient/>
        </div>
      </BackgroundPage>
    </>
  );
}
