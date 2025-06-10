// app/fonts.ts
import { Noto_Serif_Tamil, Open_Sans, Poppins } from 'next/font/google';

export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const notoSerifTamil = Noto_Serif_Tamil({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif-tamil',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // se necessário
  display: 'swap',
  variable: '--font-poppins',
});
