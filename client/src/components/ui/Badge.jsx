import './Badge.css';

/**
 * Badge
 * @param {'accent'|'teal'|'neutral'|'success'} color
 * @param {'sm'|'md'} size
 */
const Badge = ({ children, color = 'accent', size = 'md', className = '' }) => (
  <span className={`badge badge--${color} badge--${size} ${className}`}>
    {children}
  </span>
);

export default Badge;
