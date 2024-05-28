/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        neue: ['Helvetica Neue', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      fontSize: {
        '5.2xl': ['3.125rem', '4.6875rem']
      },
      spacing: {
        3.25: '0.8125rem',
        4.25: '1.0625rem',
        8.5: '2.125rem',
        9.5: '2.375rem',
        13: '3.25rem',
        17: '4.25rem',
        17.5: '4.375rem',
        42.5: '10.625rem',
        75: '18.75rem',
        78: '19.5rem',
        82: '20.5rem',
        107: '26.75rem',
        121.25: '30.3125rem',
        177.5: '44.375rem',
        202: '50.5rem',
        208: '52rem',
        265: '66.25rem',
        271: '67.75rem',
        480: '120rem',
        '32%': '32%',
        '34%': '34.33%',
        '35%': '35.27%',
        '37%': '37.12%',
        '41%': '41.25%',
        '54%': '54.42%'
      },
      colors: {
        beige: '#DDCCAA',
        crimson: {
          DEFAULT: '#E31221',
          300: '#EC4C57',
          500: '#DC3545',
          700: '#CC0E10',
          800: '#B80D0F'
        },
        'almost-white': '#D9D9D9'
      },
      backgroundImage: {
        'linear-dark-bottom':
          'linear-gradient(187.16deg, #181623 0.07%, #191725 51.65%, #0D0B14 98.75%)',
        'linear-dark-middle':
          'linear-gradient(180deg, #11101A 0%, #08080D 50.52%, rgba(0, 0, 0, 0) 100%)',
        'linear-dark-left': 'linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',
        'linear-dark-left-half':
          'linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 55.21%, rgba(0, 0, 0, 0) 100%)',
        'linear-dark-top':
          'linear-gradient(180deg, rgba(17, 16, 26, 0.95) 0%, rgba(8, 8, 13, 0.13) 50%, rgba(0, 0, 0, 0) 100%)'
      }
    }
  },
  plugins: []
}
