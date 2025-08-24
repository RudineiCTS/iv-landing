import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";

interface CardTextProps {
  title: string;
  text: ReactNode;
  className?: string;
  Icon?: any;
  textAlternative?: ReactNode; // 👈 agora pode ser string ou JSX
  textAlternative2?: ReactNode; // 👈 idem
  type?: "topic" | "text";
  topicsArray?: string[];
}

export function CardText({
  type,
  title,
  text,
  textAlternative,
  textAlternative2,
  topicsArray,
}: CardTextProps) {
  return (
    <div
      className={twMerge(
        "bg-slate-50 p-4 sm:p-6 md:p-7 rounded-2xl md:rounded-3xl w-full max-w-4xl mt-3 md:mt-5 text-center shadow-sm hover:shadow-md transition-shadow font-poppins"
      )}
    >
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--font-rosa-title)] mb-2 md:mb-3 font-poppins">
          {title}
        </h2>
        {/* <Icon/> */}
      </div>

      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-poppins">
        {text}
      </p>

      {textAlternative && (
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-poppins mt-1">
          {textAlternative}
        </p>
      )}

      {textAlternative2 && (
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-poppins mt-1">
          {textAlternative2}
        </p>
      )}

      {type === "topic" && (
        <ul className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-poppins mt-1">
          {topicsArray?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
