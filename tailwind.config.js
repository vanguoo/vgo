/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "../layouts/**/*.{html}",
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
