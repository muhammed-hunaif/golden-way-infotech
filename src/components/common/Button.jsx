import { forwardRef } from 'react';
import { cn } from '@/lib/cn';
import { scrollToSection } from '@/lib/scroll';

const BASE =
  'group inline-flex items-center justify-center gap-2.5 rounded-sm text-sm font-semibold tracking-wide transition-all duration-400 ease-premium disabled:cursor-not-allowed disabled:opacity-55';

const VARIANTS = {
  /** Filled gold — the single strongest call to action on a screen. */
  primary:
    'bg-gold-gradient text-night shadow-subtle hover:shadow-lift hover:brightness-[1.06] active:brightness-95',
  /** Outlined for dark backgrounds. */
  outline:
    'border border-gold-500/60 text-gold-300 hover:border-gold-400 hover:bg-gold-400/10 hover:text-gold-200',
  /** Outlined for light backgrounds. */
  outlineDark:
    'border border-night/15 text-night hover:border-gold-500 hover:bg-gold-50 hover:text-gold-700',
  /** Solid dark, used on cream sections. */
  dark: 'bg-night text-white hover:bg-charcoal-light',
  /** Text-only, for tertiary actions. */
  ghost: 'text-night hover:text-gold-600',
};

const SIZES = {
  sm: 'px-4 py-2 text-[0.8125rem]',
  md: 'px-6 py-3',
  lg: 'px-8 py-4',
};

/**
 * One button primitive for the whole site.
 * Renders a <button> by default, or an <a> when `href` is supplied. In-page
 * hashes are intercepted for offset-aware smooth scrolling.
 */
const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    href,
    className,
    icon: Icon,
    iconPosition = 'right',
    onClick,
    type = 'button',
    ...props
  },
  ref,
) {
  const classes = cn(
    BASE,
    VARIANTS[variant] ?? VARIANTS.primary,
    SIZES[size] ?? SIZES.md,
    className,
  );

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon
          className="h-4 w-4 shrink-0 transition-transform duration-400 ease-premium group-hover:-translate-x-0.5"
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon
          className="h-4 w-4 shrink-0 transition-transform duration-400 ease-premium group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    const isInPage = href.startsWith('#');

    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        onClick={(event) => {
          if (isInPage) {
            event.preventDefault();
            scrollToSection(href);
          }
          onClick?.(event);
        }}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button ref={ref} type={type} className={classes} onClick={onClick} {...props}>
      {content}
    </button>
  );
});

export default Button;
