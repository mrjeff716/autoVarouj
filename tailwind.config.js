/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F3F4F6", // Main page background (steel light gray)
        card: "#FFFFFF",       // Cards and sections
        border: "#D1D5DB",     // Borders/dividers
        primary: "#DC2626",    // Automotive red accent
        primaryHover: "#B91C1C", // Darker red on hover
        text: "#111827",       // Main headings/text
        muted: "#6B7280",      // Secondary text
      },
    },
  },
  plugins: [],
}