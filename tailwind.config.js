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
        // DM Sans is the workhorse: body copy, navigation, buttons, form fields.
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Pliant carries the brand voice — headings, the eyebrow, and its italic
        // for the accents and pull quotes. It is a sans, so the contrast against
        // DM Sans is one of character and weight rather than serif against sans.
        display: ['"Pliant"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Kept as a separate token from `display` so the tracked-caps label voice
        // can be changed on its own later.
        caps: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // Sized for Pliant. A sans has no hairline strokes to collapse, so the
      // near-zero tracking the previous serif required is back to the negative
      // values large sans display text wants — without it, headings at these
      // sizes read loose and the words drift apart.
      fontSize: {
        'display-sm': [
          'clamp(1.75rem, 3.8vw, 2.25rem)',
          { lineHeight: '1.22', letterSpacing: '-0.012em' },
        ],
        'display-md': [
          'clamp(2rem, 4.8vw, 3rem)',
          { lineHeight: '1.16', letterSpacing: '-0.018em' },
        ],
        'display-lg': [
          'clamp(2.5rem, 6.2vw, 3.875rem)',
          { lineHeight: '1.12', letterSpacing: '-0.024em' },
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
