module.exports = {
  mode: 'jit',
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors : {
        primary : {
          900: '#63dcff',
          700: '#86e4ff',
          500: '#9be9ff',
        }
      }
    },
  },
  plugins: [],
};
