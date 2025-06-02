"use client";
import { BackgroundPage } from "@/components/backgroundPage";
import { Menu, X } from "lucide-react";

import "./globals.css";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MetodologiaPage } from "./Page/MetodologiaPage";
export default function Home() {
  const useNavigate = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function handleSwitchPage() {
    useNavigate.push("/contact");
  }
  function handleSwitchPageInHeader(e: string) {
    switch (e) {
      case "home":
        useNavigate.push("/");
        break;
      case "consultancy":
        useNavigate.push("/contact");
        break;
      case "about":
        useNavigate.push("/about");
        break;
        default:
        }
      }
      return (
      <>
        <BackgroundPage className=""> 
          <div className="md:flex md:w-[1440px] md:h-full mb-48">
              <div className="w-full md:h-full md:flex-col md:flex md:w-1/2 p-6 md:p-12 text-center md:text-left">
                <Image
                  src={"/assets/logo_1.png"}
                  width={150}
                  height={50}
                  alt="logo"
                  style={{ objectFit: "contain" }}
                  className="ml-6"
                  />
                  <div className="flex-grow md:flex md:flex-col justify-center gap-7 p-6 md:p-12  md:text-left ">
                    <h1 className="text-3xl md:text-5xl text-[var(--font-rosa-title)]  font-bold italic">
                      TREINE COM A ISA
                    </h1>
                    <p className="text-lg md:text-2xl font-semibold text-[var(--font-rosa-paragraph)] mt-4 ">
                      Transforme seus objetivos em resultados reais, com suporte
                      especializado.
                    </p>
                    <p className="text-[var(--font-rosa-paragraph)] mt-4 text-pretty text-xl">
                      Meu nome é Isabella Viana, e sou personal trainer, e estou aqui
                      para ajudar você alcançar seus objetivos
                    </p>
                    <button
                      onClick={handleSwitchPage}
                      className="mt-6 px-6 py-3 md:w-52 md:bg-pink-600 md:text-white font-bold rounded-full bg-white text-pink-500"
                      >
                      começar ➤
                    </button>
                  </div>
              </div>
              <div className="w-full md:w-1/2 md:mt-16">
                <Image
                  src={"/assets/isabela_background.svg"}
                  alt="isabela"
                  width={540}
                  height={670}
                />
              </div>
          </div>

          <MetodologiaPage/>
        </BackgroundPage>
      </>
  );
}
