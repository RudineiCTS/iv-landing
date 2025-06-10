import { twMerge } from "tailwind-merge";

interface CardText {
  title: string;
  text: string;
  className?: string;
}

export function CardText({ title, text,className }: CardText) {
  return (
    <div
      className={twMerge(
        "bg-slate-50 p-4 sm:p-6 md:p-7 rounded-2xl md:rounded-3xl w-full max-w-4xl mt-3 md:mt-5 text-center shadow-sm hover:shadow-md transition-shadow font-poppins"
      )}
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--font-rosa-title)] mb-2 md:mb-3 font-poppins">
        {title}
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-poppins">
        {text}
      </p>
    </div>
  );
}
