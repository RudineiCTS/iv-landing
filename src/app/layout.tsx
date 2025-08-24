import type { Metadata } from "next";
import { notoSerifTamil, openSans, poppins } from "../Fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Viana",
  description: "Experiência de treinar com um personal que é focado em resultados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${openSans.variable}
          ${poppins.variable}
          ${notoSerifTamil.variable}
          font-sans
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
