/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 定义自定义字体
        'math': ['math', 'Arial', 'Microsoft YaHei', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
