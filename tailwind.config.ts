import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'stars':'url("/stars.png")',
        'twinkling':'url("/twinkling.png")'
      },

      colors: {
        'dark': '#210535',
        'mid-dark': '#430d4b',
        'mid': '#7b337d',
        'mid-light': '#c874b2',
        'light': '#f5d5e0',
      },

      fontFamily: {
        'main': ['var(--font-main)'],
      },

      animation: {
        twinkle: "move 20s ease-in-out infinite",
      },

      keyframes: {
        move: {
          '0%':{
            transform: 'translateX(0px)'
          },
          // '50%': {
          //   transform: 'translateX(100%)'
          // },
          '100%': {
            transform: 'translateX(1000px)'
          },
        }
      }
    },
  },
  plugins: [],
}
export default config
