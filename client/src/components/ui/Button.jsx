import './Button.css';

/**
 * Button
 * @param {'primary'|'outline'|'ghost'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {string} href — renders as <a> if provided
 * @param {ReactNode} iconLeft / iconRight
 * @param {boolean} fullWidth
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  onClick,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = 'button',
  className = '',
}) => {
  const cls = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inner = (
    <>
      {iconLeft  && <span className="btn__icon btn__icon--left">{iconLeft}</span>}
      <span className="btn__label">{children}</span>
      {iconRight && <span className="btn__icon btn__icon--right">{iconRight}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cls}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {inner}
    </button>
  );
};

export default Button;
