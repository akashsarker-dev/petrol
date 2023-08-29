/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#F40404',
        'overlay-color': 'rgba(0, 0, 0, 0.60)',

      },
      maxWidth: {
        'container': '1140px',
      },
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        
        'hero-pattern': "url('./src/components/images/banner.png')",
        'service': "url('./src/components/images/service1.png')",
        'service-two': "url('./src/components/images/service2.png')",
        'service-three': "url('./src/components/images/service3.png')",
        'blog': "url('./src/components/images/blog1.png')",
        'blog-two': "url('./src/components/images/blog2.png')",
        'blog-three': "url('./src/components/images/blog3.png')",
      },
    }
  },
  plugins: [],
}

