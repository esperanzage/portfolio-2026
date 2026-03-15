/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAF8',
        surface: '#F5EDE0',
        'surface-hover': '#EDE5D6',
        'text-primary': '#1A1A1A',
        'text-secondary': '#3A3A3A',
        'text-muted': '#666666',
        accent: '#B08D57',
        'accent-light': '#F0EBE3',
        'badge-border': '#D4C9B8',
        border: '#E5E0D8',
      },
      fontFamily: {
        sans: ['Rethink Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
        'body-text': '800px',
        'hero-text': '800px',
      },
      borderRadius: {
        card: '16px',
        badge: '24px',
        inner: '12px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.04)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
