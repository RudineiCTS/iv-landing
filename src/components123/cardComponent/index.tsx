import Image from "next/image";

export function CardComponent() {
  return (
    <div className="flex flex-col gap-7">
      <Image
        src={"/assets/img_to_personal/imagem-teste.png"}
        alt="Card image"
        width={320}
        height={380}
      />
    <div className="w-80 h-40 shadow-md hover:shadow-xl transition-all duration-300 p-6 bg-white rounded-lg hover:h-44">
  <h3 className="font-bold">Heloisa</h3>
  <p className="w-full h-full overflow-hidden text-ellipsis line-clamp-3">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  </p>
</div>

    </div>
  );
}
