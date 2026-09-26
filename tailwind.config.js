/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2.5rem',
        xl: '3rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        gold: {
          DEFAULT: '#B8862D',
          50: '#FBF7EE',
          100: '#F4EAD3',
          200: '#E8D3A4',
          300: '#DCBC74',
          400: '#D4AF37',
          500: '#B8862D',
          600: '#A2751F',
          700: '#8A641C',
          800: '#6B4D16',
          900: '#4A350F',
        },
        ink: {
          DEFAULT: '#222222',
          soft: '#4A4A4A',
          muted: '#6E6E6E',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#242424',
          dark: '#141414',
        },
        night: '#111111',
        cream: '#F8F7F3',
      },
      fontFamily: {
        // Two families, both self-hosted (src/styles/fonts.css), neither with an
        // italic, so emphasis comes from weight alone.
        // Manrope: reading text — body copy, descriptions, form fields.
        sans: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Jost: the brand voice — headings, stats, navigation, buttons.
        display: ['"Jost"', '"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Jost for the tracked-caps labels (eyebrows, card tags). Kept as its
        // own token so the label voice can be changed separately.
        caps: ['"Jost"', '"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // Sized for Jost. Its geometric capitals are narrower than Manrope's, so
      // headings need only a light negative tracking to hold together.
      fontSize: {
        'display-sm': [
          'clamp(1.75rem, 3.8vw, 2.25rem)',
          { lineHeight: '1.2', letterSpacing: '-0.01em' },
        ],
        'display-md': [
          'clamp(2rem, 4.8vw, 3rem)',
          { lineHeight: '1.14', letterSpacing: '-0.015em' },
        ],
        'display-lg': [
          'clamp(2.5rem, 6.2vw, 3.875rem)',
          { lineHeight: '1.08', letterSpacing: '-0.02em' },
        ],
      },
      letterSpacing: {
        overline: '0.24em',
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        subtle: '0 1px 2px rgba(17, 17, 17, 0.04), 0 8px 24px -12px rgba(17, 17, 17, 0.10)',
        card: '0 2px 4px rgba(17, 17, 17, 0.03), 0 18px 40px -24px rgba(17, 17, 17, 0.22)',
        lift: '0 6px 12px rgba(17, 17, 17, 0.05), 0 28px 60px -28px rgba(138, 100, 28, 0.32)',
        goldline: '0 0 0 1px rgba(184, 134, 45, 0.28)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #B8862D 48%, #8A641C 100%)',
        'gold-sheen':
          'linear-gradient(100deg, transparent 20%, rgba(212, 175, 55, 0.22) 50%, transparent 80%)',
        'night-gradient': 'linear-gradient(160deg, #111111 0%, #1A1A1A 55%, #141414 100%)',
        hairline: 'linear-gradient(90deg, transparent, rgba(184, 134, 45, 0.55), transparent)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        900: '900ms',
      },
      keyframes: {
        'marquee-x': {
          from: { transform: 'translate3d(0, 0, 0)' },
          to: { transform: 'translate3d(-50%, 0, 0)' },
        },
        'pulse-node': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.35)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee-x 42s linear infinite',
        'pulse-node': 'pulse-node 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.4s ease-out both',
      },
    },
  },
  plugins: [],
};
