"use client";
import Image from "next/image";
import { useState } from "react";
export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [obj, setObj] = useState("");

  function handleSubmit() {
    const phoneNumber = "5517991035529";
    const textMessage = `Olá, me chamo ${name}.  
    Estou entrando em contato através do formulário do site.  
    Email: ${email}  
    Contato: ${telefone}  
    Objetivo: ${obj}
    Gostaria de mais informações. Aguardo seu retorno. Obrigado(a)!`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      textMessage
    )}`;

    window.open(whatsappURL, "_blank");
  }
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen ">
    <div className="hidden md:flex md:w-1/2 bg-pink-600 text-white p-8 md:justify-center">
      <div className="max-w-md ">
        <div className="flex  flex-col items-center gap-2">
          <Image src="/assets/logo-white.svg" alt="Logo"  width={750}
            height={400}/>
          <h1 className="text-2xl font-bold uppercase">testo destaque</h1>
        </div>
        <p className="mt-4 text-sm md:text-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-4 w-full md:w-1/2 justify-center items-center bg-gray-100 p-6">
    <Image
      src={'/assets/logo_1.png'}
      alt="logo"
      width={150}
      height={50}
      className="md:hidden mb-4"
    />
      <h2 className="text-lg font-semibold mb-4">Preencha seus dados para contato</h2>
      <form className="w-full max-w-sm space-y-4">
        <input type="text" placeholder="Nome" className="w-full p-3 border rounded-md" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
        <input type="text" placeholder="Contato" className="w-full p-3 border rounded-md" />
        <textarea placeholder="Objetivo" className="w-full p-3 border rounded-md h-24"></textarea>
        <button className="w-full bg-pink-600 text-white p-3 rounded-md">Enviar</button>
      </form>
    </div>

    {/* Container do conteúdo para mobile */}
    <div className="md:hidden flex flex-col w-full bg-pink-600 text-white p-6 text-center">
      <div className="flex flex-col items-center">
      <Image src="/assets/logo-white.svg" alt="Logo" width={150} height={50}/>
        <h1 className="text-2xl font-bold uppercase">Texto destaque</h1>
      </div>
      <p className="mt-4 text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry...
      </p>
    </div>
  </div>
  );
}
