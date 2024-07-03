/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      textColor: {
        DEFAULT: "text-gray-800", // Color de texto por defecto (gris oscuro en este ejemplo)
      },
      colors: {
        astro: "#ff5a00", // Naranja de Astro (ajústalo si es diferente)
        tailwind: "#38bdf8", // Azul de Tailwind (ajústalo si es diferente)
      },
      animation: {
        "text-gradient": "text-gradient 1.5s linear infinite",
      },
      keyframes: {
        "text-gradient": {
          to: {
            backgroundPosition: "200% center",
          },
        },
      },
    },
  },
  plugins: [],
};
