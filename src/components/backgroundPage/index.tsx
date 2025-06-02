import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface BackgroundPageProps {
  children: ReactNode;
  className: string;
}
export function BackgroundPage({ children, className }: BackgroundPageProps) {
  return (
    <div
      className={twMerge(
        "w-full md:flex-col flex p-8 items-center min-h-screen bg-white",
        className
      )}
      style={{
        backgroundImage: `url('./assets/background_desktop.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
}
