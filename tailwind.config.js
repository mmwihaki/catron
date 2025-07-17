/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dc2626",
        charcoal: "#1f2937",
        "charcoal-light": "#374151",
        silver: "#9ca3af",
        "silver-light": "#e5e7eb",
        "background-gray": "#f9fafb",
        "border-gray": "#d1d5db",
      },
    },
  },
  plugins: [],
};
