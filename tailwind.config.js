/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend:{
      colors:{
        green:{
          200: '#e8fffe',
          300: '#a0f0ed',
          400:'#64d5ca',
          500: '#4dc0b5',
          600: '#38a89d',
          700: '#20504f',
          800: '#0d3331'
        }
      }
    }
  },
  variants: {},
  plugins: []
}


// .bg-teal-darkest  { background-color: #0d3331 !important;}  
// .bg-teal-darker { background-color: #20504f !important;}  
// .bg-teal-dark { background-color: #38a89d !important;}  
// .bg-teal  { background-color: #4dc0b5 !important;}  
// .bg-teal-light  { background-color: #64d5ca !important;}  
// .bg-teal-lighter  { background-color: #a0f0ed !important;}  
// .bg-teal-lightest { background-color: #e8fffe !important;}  