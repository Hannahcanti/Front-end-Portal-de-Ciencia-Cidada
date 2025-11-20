/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    biggerHeight: {
      homeImage : ''
    },
    fontFamily: {
      raleway: ['raleway'],
    },
    colors: {
      'dark-blue': '#346786',
      'darker-blue': '#0B2455',
      blue: '#2196f3',
      white: '#fcfcfc',
      'light-gray': '#EDEDED',
      black: '#111',
      white2: '#fafafa',
      gray: '#909090',
    },
    extend: {
      backgroundImage : {'homeBackgroundImage': "url('src/assets/images/home.jpg')"},
      boxShadow: {
        sidebar: '0px 2px 16px 0px rgba(0, 0, 0, 0.10) inset',
      },
    },
  },
  plugins: [],
};
