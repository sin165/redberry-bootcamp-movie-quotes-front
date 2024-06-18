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
        15: '3.75rem',
        17: '4.25rem',
        17.5: '4.375rem',
        21.5: '5.375rem',
        29: '7.25rem',
        30: '7.5rem',
        42.5: '10.625rem',
        47: '11.75rem',
        52.5: '13.125rem',
        75: '18.75rem',
        78: '19.5rem',
        82: '20.5rem',
        107: '26.75rem',
        121.25: '30.3125rem',
        150: '37.5rem',
        132: '33rem',
        164.5: '41.125rem',
        177.5: '44.375rem',
        202: '50.5rem',
        208: '52rem',
        250: '62.5rem',
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
      borderRadius: {
        '0.5xl': '0.625rem'
      },
      colors: {
        beige: '#DDCCAA',
        crimson: {
          DEFAULT: '#E31221',
          200: '#F07C84',
          300: '#EC4C57',
          500: '#DC3545',
          700: '#CC0E10',
          800: '#B80D0F'
        },
        gray: {
          light: '#CED4DA',
          pale: {
            DEFAULT: '#CED4DA33',
            50: '#CED4DA80'
          },
          dark: '#6C757D'
        },
        blue: {
          link: '#0D6EFD'
        },
        night: {
          DEFAULT: '#222030',
          faded: '#24222F',
          dark: '#11101A',
          deep: '#181624',
          pale: '#22203033'
        },
        darkened: '#0000008A',
        lightened: '#FFFFFF0D',
        'almost-white': '#D9D9D9'
      },
      boxShadow: {
        pink: '0px 0px 0px 4px #F07C8480',
        outline: '0px 0px 0px 4px #0D6EFD40'
      },
      backgroundImage: {
        'linear-diagonal':
          'linear-gradient(293deg, rgba(239, 239, 239, 0.09) -1.81%, rgba(239, 239, 239, 0.002) 102.5%)',
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
