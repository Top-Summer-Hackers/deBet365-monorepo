/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "scaffoldEthDark",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      // {
      //   scaffoldEth: {
      //     primary: "#93BBFB",
      //     "primary-content": "#212638",
      //     secondary: "#DAE8FF",
      //     "secondary-content": "#212638",
      //     accent: "#93BBFB",
      //     "accent-content": "#212638",
      //     neutral: "#212638",
      //     "neutral-content": "#ffffff",
      //     "base-100": "#ffffff",
      //     "base-200": "#F9FBFF",
      //     "base-300": "#DAE8FF",
      //     "base-content": "#212638",
      //     info: "#93BBFB",
      //     success: "#34EEB6",
      //     warning: "#FFCF72",
      //     error: "#FF8863",

      //     "--rounded-btn": "9999rem",

      //     ".tooltip": {
      //       "--tooltip-tail": "6px",
      //     },
      //   },
      // },
      {
        scaffoldEth: {
          primary: "#212638",
          "primary-content": "#F9FBFF",
          secondary: "#2A3655",
          "secondary-content": "#F9FBFF",
          accent: "#4969A6",
          "accent-content": "#F9FBFF",
          neutral: "#F9FBFF",
          "neutral-content": "#385183",
          "base-100": "#385183",
          "base-200": "#2A3655",
          "base-300": "#212638",
          "base-content": "#F9FBFF",
          info: "#385183",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "hsl(var(--p))",
          },
        },
      },
      {
        scaffoldEthDark: {
          primary: "#212638",
          "primary-content": "#F9FBFF",
          secondary: "#2A3655",
          "secondary-content": "#F9FBFF",
          accent: "#4969A6",
          "accent-content": "#F9FBFF",
          neutral: "#F9FBFF",
          "neutral-content": "#385183",
          "base-100": "#385183",
          "base-200": "#2A3655",
          "base-300": "#212638",
          "base-content": "#F9FBFF",
          info: "#385183",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "hsl(var(--p))",
          },
        },
      },
      {
        exampleUi: {
          primary: "#000000",
          "primary-content": "#ffffff",
          secondary: "#FF6644",
          "secondary-content": "#212638",
          accent: "#93BBFB",
          "accent-content": "#212638",
          neutral: "#f3f3f3",
          "neutral-content": "#212638",
          "base-100": "#ffffff",
          "base-200": "#f1f1f1",
          "base-300": "#d0d0d0",
          "base-content": "#212638",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
        },
      },
    ],
  },
  theme: {
    // Extend Tailwind classes (e.g. font-bai-jamjuree, animate-grow)
    extend: {
      colors: {
        'bet-black-light': '#111111',
        'bet-black-lighter': '#212026',
        'bet-teal': '#006A91',
        'bet-cyan': '#87EFFF',
        'bet-deposit': '#4F4F4F',
        'bet-dark-cyan': '#003F55',
        'bet-darker-cyan': '#0F1C29',
        'bet-yellow': '#FBD410',
        'bet-green': '#05CD99'
      },
      backgroundImage: {
        'hero-circle': "url('/login/circle-gradient.png')",
        'hero-player': "url('/login/player.png'",
        'match-circuit': "url('/app/circuits.png')"
      },
      fontFamily: {
        "bai-jamjuree": ["Bai Jamjuree", "sans-serif"],
      },
      keyframes: {
        grow: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        zoom: {
          "0%, 100%": { transform: "scale(1, 1)" },
          "50%": { transform: "scale(1.1, 1.1)" },
        },
      },
      animation: {
        grow: "grow 5s linear infinite",
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        zoom: "zoom 1s ease infinite",
      },
    },
  },
};
