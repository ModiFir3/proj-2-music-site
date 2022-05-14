module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        bluePurple: '#5C5AC9',
        white: '#FFFFFF',
        darkerBlue: '#2C3487',
        brightRed: '#FF4400',
        medBlue: '#40A4DD',
        black:'#000000',
        lightPurp: '#EBEBF9',
        darkGray: '#65656B'
      },
      padding: {
        '1/2': '50%',
        full:'100%',
      },
    },
    fontFamily: {
      'sans': ['Asap', 'sans-serif'],
  },
  plugins: [],
}} 
