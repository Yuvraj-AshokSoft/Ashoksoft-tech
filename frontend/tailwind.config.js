/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#FFFFFF",
          card: "#FFFFFF",
          border: "#E5E7EB",
        },

        brand: {
          primary: "#0C8DA1",      // Logo teal
          secondary: "#0A6E7E",    // Dark teal
          accent: "#F97316",       // Logo orange
          heading: "#1F2937",      // Navy
          text: "#64748B",         // Paragraph
          light: "#F8FAFC",        // Section background
          border: "#E5E7EB",
        },
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",

        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      boxShadow: {
        primary: "0 10px 30px rgba(12,141,161,.12)",

        hover: "0 20px 40px rgba(12,141,161,.18)",

        card: "0 10px 30px rgba(0,0,0,.05)",
      },
    },
  },
  plugins: [],
};