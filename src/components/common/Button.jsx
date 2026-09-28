import { forwardRef } from 'react';
import { cn } from '@/lib/cn';
import AppLink from '@/components/common/AppLink';

const BASE =
  'group inline-flex items-center justify-center gap-3 rounded-full font-display text-sm font-semibold tracking-wide transition-all duration-400 ease-premium disabled:cursor-not-allowed disabled:opacity-55';

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
  /** Solid white, used on the gold band. */
  light: 'bg-white text-gold-700 shadow-subtle hover:shadow-lift hover:text-gold-800',
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
 *
 * Renders a <button> by default, an <AppLink> when `to` is supplied — the site's
 * own routes and sections — and a plain <a> when `href` is, which is reserved for
 * targets outside the app: `tel:`, `mailto:` and external sites.
 */
const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    to,
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
          className="h-4 w-4 shrink-0 transition-transform duration-400 ease-premium group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (to) {
    return (
      <AppLink ref={ref} to={to} className={classes} onClick={onClick} {...props}>
        {content}
      </AppLink>
    );
  }

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} onClick={onClick} {...props}>
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
