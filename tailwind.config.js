/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",   // Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./src/**/*.{js,ts,jsx,tsx}",       // If you keep components in /src
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563eb", // custom brand blue
          light: "#3b82f6",
          dark: "#1e40af",
        },
      },
      borderRadius: {
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
