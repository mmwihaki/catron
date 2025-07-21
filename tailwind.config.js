/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#f5f5f5',
        'surface-dark': '#1e1e1e',
        'text-primary': '#212121',
        'text-secondary': '#b0b0b0',
        'accent-primary': '#e60012',
        'accent-secondary': '#007bff',
        'white': '#ffffff',
        'divider': '#b0b0b0',
        'header-muted': '#757575',
        'header-hover': '#007bff',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'SF Pro Display',
          'SF Pro Text',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
