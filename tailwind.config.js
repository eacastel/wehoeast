module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'tmagenta': '#ec008c',
        'tlblue': '#00aeef',
        'tyellow': '#fff200',
        'tdblue': '#23408f',
        'tblack': '#0d0d0d',
        'tlinkblue': 'hsl(207deg 74% 32%)',

        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)'
        }


      }
    }
  },
  variants: {},
  plugins: []
};
