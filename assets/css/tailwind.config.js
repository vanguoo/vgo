/** @type {import('tailwindcss').Config} */
const themeDir = __dirname + '/../../';

module.exports = {
  content: [
    themeDir + 'layouts/**/*.html',
    themeDir + 'layouts/*.html',
  ],
  theme: {
    extend:{},
    fontFamily:{
      'sans': ['"Open Sans"', 'sans-serif'],
      'serif': ['"Merriweather"', 'serif'],
      'mono': ['"Source Code Pro"', 'monospace'],
    },
  plugins: [],
  }

}
