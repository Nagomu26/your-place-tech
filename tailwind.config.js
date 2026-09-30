/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        paper: "#090B11",
        mist: "#12161F",
        cardbg: "#0E1118",
        ink: "#EAEEF6",
        stone: "#8C94A6",
        line: "#1F2630",
        accent: "#00DFC6",
        deep: "#05070B",
        limon: "#2F3A4B",
        berry: "#FF3D81",
        aqua: "#3A8DFF",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "ui-monospace", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px -30px rgba(0,0,0,.55)",
        cardhover: "0 30px 70px -30px rgba(0,223,198,.18)",
        accentglow: "0 0 0 1px rgba(0,223,198,.35), 0 0 24px -6px rgba(0,223,198,.55)",
      },
      borderRadius: {
        lg: "0.125rem",
        md: "0.125rem",
        sm: "0.125rem",
      },
    },
  },
  plugins: [],
}