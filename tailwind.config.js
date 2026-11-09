export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    fontFamily: { sans: ['var(--font-sans)'] },
    colors: {
      ink: 'rgb(var(--color-ink) / <alpha-value>)',
      panel: 'rgb(var(--color-panel) / <alpha-value>)',
      line: 'rgb(var(--color-line) / <alpha-value>)',
      accent: 'rgb(var(--color-accent) / <alpha-value>)',
      violet: 'rgb(var(--color-violet) / <alpha-value>)'
    },
    keyframes: { float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } }, flow: { to: { strokeDashoffset: -24 } } },
    animation: { float: 'float 6s ease-in-out infinite', flow: 'flow 2s linear infinite' }
  } },
  plugins: []
}
