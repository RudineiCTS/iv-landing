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
        "w-full flex flex-col p-4 sm:p-6 md:p-8 items-center min-h-screen bg-white",
        className
      )}
      style={{
        backgroundImage: `url('./assets/background_desktop.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {children}
    </div>
  );
}