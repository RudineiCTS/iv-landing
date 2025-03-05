"use client"
import { useState } from "react";
export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [obj, setObj] = useState();

  function handleSubmit() {
    const phoneNumber = "5517991035529";
    const textMessage = `Olá, meu nome é ${name}`;
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      textMessage
    )}`;

    window.open(whatsappURL, "_blank");
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <h1 className="mb-6">Preencha os dados para contato</h1>
        <div className=" flex flex-col gap-2">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            className="rounded-md h-10 py-6"
            onChange={(e) => setName(e.target.value as string)}
          />

          <label htmlFor="email">E-mail:</label>
          <input type="email" className="rounded-md h-10 py-6" />

          <label htmlFor="tel">Número de contato</label>
          <input type="tel" className="rounded-md h-10 py-6" />

          <label htmlFor="objetivo">Descreva seu objetivo</label>
          <textarea id="objetivo" rows={4} cols={50}></textarea>

          <button className="mt-3" onClick={handleSubmit}>Enviar</button>
        </div>
      </div>
    </>
  );
}
