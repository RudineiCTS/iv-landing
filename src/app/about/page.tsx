import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full h-screen max-w-[1250px] mx-auto">
      <div className="flex items-center gap-2 self-start">
        <Image
            src={'/assets/academia.png'}
            alt="logo de alter"
            width={200}
            height={200}
        />
        <h1 className="font-bold text-4xl">Metodologia</h1>
      </div>
      <div>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </div>

      <section className=" flex">
        <div>
            <Image
                src={'/assets/img_to_personal/img1.jpg'}
                alt="image-demonstrativa"
                width={360}
                height={560}
                />
        </div>
           <span>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
           </span>
      </section>
    </div>
  );
}
