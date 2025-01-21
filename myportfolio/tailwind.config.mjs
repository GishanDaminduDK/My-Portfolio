// // /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         lightHover: '#fcf4ff',
//         darkHover: '#2a004a',
//         darkTheme: '#11001F',
//         mutedIndigo: 'rgb(111, 101, 121)',
//       },
//       fontFamily: {
//         Outfit: ['Outfit', 'sans-serif'],
//         Ovo: ['Ovo', 'serif'],
//       },
//       boxShadow: {
//         'black': '4px 4px 0 #000',
//         'white': '4px 4px 0 #fff',
//       },
//       gridTemplateColumns: {
//         'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
//       },
//       backgroundImage: {
//         // Add your custom gradient
//         'custom-gradient': 'linear-gradient(135deg, rgba(150,141,175,0.8), rgba(121,111,171,0.9), rgba(101,91,141,1))',
//       },
//     },
//   },
//   darkMode: 'class', // Use 'class' for toggling dark mode
//   plugins: [],
// };
// /** @type {import('tailwindcss').Config} */
// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkTheme: '#1b1f24',  // Dark grayish-blue (rgb: 27, 31, 36)
        lightHover: '#f0f8ff',  // Light blue hover effect (can be adjusted)
        darkHover: '#4c2c92',    // Deep purple hover effect
        mutedIndigo: '#6f667e',  // Muted grayish-blue
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
        // Complementary gradient based on the dark color
        'custom-gradient': 'linear-gradient(135deg, rgba(27,31,36,0.8), rgba(45,40,58,0.9), rgba(28,36,51,1))',
      },
    },
  },
  darkMode: 'class', // Use 'class' for toggling dark mode
  plugins: [],
};
