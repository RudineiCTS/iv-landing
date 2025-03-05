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
    <section className="h-screen bg-[url('/assets/background_contact.png')] bg-cover bg-center">
      <div className="grid grid-cols-2 h-screen place-items-center ">
        <div className=" flex flex-col gap-2 order-2">
          <h1 className="mb-6 font-semibold">Preencha os dados para contato</h1>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            className="rounded-md h-10 py-6"
            onChange={(e) => setName(e.target.value as string)}
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            className="rounded-md h-10 py-6"
            onChange={(e) => setEmail(e.target.value as string)}
          />

          <label htmlFor="tel">Número de contato</label>
          <input
            type="tel"
            className="rounded-md h-10 py-6"
            onChange={(e) => setTelefone(e.target.value as string)}
          />

          <label htmlFor="objetivo">Descreva seu objetivo</label>
          <textarea
            id="objetivo"
            rows={4}
            cols={50}
            onChange={(e) => setObj(e.target.value as string)}
          ></textarea>
          <button
            className="mt-3 w-auto h-10 rounded-md text-center bg-rosaEscuro text-white"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </div>
        <div className="order-1 flex flex-col justify-center items-center">
          <Image
            src={"/assets/logo-white.svg"}
            alt="logo-personal"
            width={750}
            height={400}
          />
          <p className="mx-40 text-xl text-white font-normal">
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
    </section>
  );
}
