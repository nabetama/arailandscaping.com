/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#264d3c',
        'accent': '#bfa046',
        'bg-black': '#000000',
        'bg-color': '#f5f5f5',
        'border-color': '#e5ded6',
        'text-sumi': '#222',
        'text-hanshi': '#fff',
      },
      fontFamily: {
        'serif': [
          'Times New Roman',
          '游明朝',
          'Yu Mincho',
          '游明朝体',
          'YuMincho',
          'ヒラギノ明朝 Pro W3',
          'Hiragino Mincho Pro',
          'HiraMinProN-W3',
          'HGS明朝E',
          'ＭＳ Ｐ明朝',
          'MS PMincho',
          'serif'
        ],
      },
      spacing: {
        '15': '3.75rem',
        '45': '11.25rem',
        '55': '13.75rem',
        '70': '17.5rem',
        '95': '23.75rem',
      },
      boxShadow: {
        'section': '0 4px 16px rgba(38, 77, 60, 0.08)',
        'work': '0 4px 20px rgba(38, 77, 60, 0.08)',
        'work-hover': '0 8px 30px rgba(38, 77, 60, 0.15)',
      },
      borderRadius: {
        'section': '18px',
        'work': '12px',
      },
      backgroundImage: {
        'pattern': 'repeating-linear-gradient(135deg, #e5ded6 0 8px, transparent 8px 16px)',
      }
    },
  },
  plugins: [],
} 