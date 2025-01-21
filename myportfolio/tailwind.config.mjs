
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkTheme: '#020617',  // Dark grayish-blue (rgb: 27, 31, 36)
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
