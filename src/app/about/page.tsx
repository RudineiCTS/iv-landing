import { CardComponent } from "@/components/cardComponent";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full h-screen max-w-[1250px] mx-auto">
      <div className="flex items-center gap-2 self-start">
        <Image
          src={"/assets/academia.png"}
          alt="logo de alter"
          width={200}
          height={200}
        />
        <h1 className="font-bold text-4xl">Metodologia</h1>
      </div>
      <div className="mb-10">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>

      <section className="grid grid-cols-6 grid-rows-3 md:grid-cols-4 gap-6  w-screen h-3/4">
        <div className="bg-rosaEscuro p-4 rounded-2xl relative left-[-10px] flex justify-end row-span-2">
          <Image
            src="/assets/img_to_personal/img3.png"
            alt="Treinamento"
            className="rounded-2xl w-[260px] "
            width={360}
            height={470}
            style={{ objectFit: "fill" }}
          />
        </div>
        <p className="text-gray-700 col-span-3 m-12 w-3/5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>

        <div className="bg-rosaEscuro p-4 rounded-2xl relative left-[-10px] flex justify-start col-start-4 col-span-2 row-start-2 row-span-2">
          <Image
            src="/assets/img_to_personal/img3.png"
            alt="Treinamento"
            className="rounded-2xl w-[260px] "
            width={360}
            height={470}
            style={{ objectFit: "fill" }}
          />
        </div>
        <p className="text-gray-700 col-start-2 col-span-2 row-start-3 m-12 w-auto text-right">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </section>

      <div className="flex flex-col justify-center gap-7 mb-5 pb-10">
        <h1 className="font-bold text-4xl mt-14 text-center"> Resultado </h1>

        <div className="flex justify-center items-center gap-8">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </div>
  );
}
