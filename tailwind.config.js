module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '50': '12.4rem',
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      7: '10px',
      8: '16px',
      10: '20px',
    },
    screens: {
      sm: '400px',
      md: '550px',
      xl: '700px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
