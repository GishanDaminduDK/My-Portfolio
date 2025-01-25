export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkTheme: '#020617',
        lightHover: '#f0f8ff',
        darkHover: '#4c2c92',
        mutedIndigo: '#6f667e',
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'serif'],
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, rgba(27,31,36,0.8), rgba(45,40,58,0.9), rgba(28,36,51,1))',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    function({ addBase }) {
      addBase({
        '.custom-star-list': {
          'list-style-type': 'none',
          'padding-left': '20px'
        },
        '.custom-star-list li::before': {
          'content': '"★ "',
          'color': '#6366f1',
          'margin-right': '10px'
        }
      })
    }
  ]
};