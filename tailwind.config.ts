import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        rosaSuave: "var(--rosa-suave)",
        rosaEscuro: "var(--rosa-escuro)",
      },
      backgroundColor: {
        rosaEscuro: "var(--rosa-escuro)",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        tamil: ["var(--font-noto-serif-tamil)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
