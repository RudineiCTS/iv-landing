"use client";
import { BackgroundPage } from "@/Components/backgroundPage";
import { Menu, X } from "lucide-react";

import { HeaderComponent } from "@/Components/HerdarComponent";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
    <BackgroundPage className="">
      <div className="w-full md:h-full md:flex-col md:flex md:w-1/2 p-6 md:p-12 text-center md:text-left">
        <Image
          src={"/assets/logo_1.png"}
          width={150}
          height={50}
          alt="logo"
          style={{ objectFit: "contain" }}
          className="ml-6"
        />
        <HeaderComponent switchPage={handleSwitchPageInHeader} />
        <div className="flex-grow md:flex md:flex-col justify-center p-6 md:p-12  md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold md:text-gray-700 text-black">
            Personal Trainer
          </h1>
          <p className="text-lg md:text-xl font-semibold md:text-gray-700 mt-4 text-black">
            Transforme seus objetivos em resultados reais, com suporte
            especializado.
          </p>
          <p className="md:text-gray-600 mt-4 text-black">
            Com mais de 10 anos de experiência, já ajudei pessoas comuns e
            atletas a alcançarem seus objetivos. Agora, como seu Personal
            Trainer Online, estou pronto para fazer o mesmo por você.
          </p>
          <button
            onClick={handleSwitchPage}
            className="mt-6 px-6 py-3 md:w-52 md:bg-pink-600 md:text-white font-bold rounded-full bg-white text-pink-500"
          >
            começar ➤
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src={"/assets/isabela_background.svg"}
          alt="isabela"
          width={640}
          height={770}
        />
      </div>

      <div className="md:hidden flex self-start ml-5 mb-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-pink-600 text-white flex justify-center items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 focus:outline-none absolute top-10 left-8"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <a
                  id="home"
                  onClick={(e) =>
                    handleSwitchPageInHeader((e.target as HTMLAnchorElement).id)
                  }
                  className="text-lg cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  id="about"
                  onClick={(e) =>
                    handleSwitchPageInHeader((e.target as HTMLAnchorElement).id)
                  }
                  className="text-lg cursor-pointer"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  id="consultancy"
                  onClick={(e) =>
                    handleSwitchPageInHeader((e.target as HTMLAnchorElement).id)
                  }
                  className="text-lg cursor-pointer"
                >
                  Consultoria
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </BackgroundPage>
  );
}
