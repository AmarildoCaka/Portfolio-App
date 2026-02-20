/** @type {import('tailwindcss').Config} */

export default {

  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  darkMode: 'class',

  theme: {

    extend: {

      colors: {

        // General Document's Dark Mode Color:

        'general-body-darkmode-color': '#202020',

        // For About.jsx Component:

        'custom-light-blue': '#ADC8FF',

        'custom-even-darker-blue': '#2D3E50',

        'custom-green': '#008000',

        'dark-mode-text-symbol-color': '#0cdb0c',

        // For ContactMe.jsx Component:

        'last-darkmode-section-bg-color': '#3B3B3B',

        'inner-download-box-bg-color': '#4A4A4A'

      },

    },

    fontFamily: {
      
      'sans': ['ui-sans-serif', 'system-ui'],

      'serif': ['ui-serif', 'Georgia'],

      'mono': ['ui-monospace', 'SFMono-Regular']
      
    }

  },

  plugins: [],

}