import './SectionHeader.css';

/**
 * SectionHeader
 * @param {string} eyebrow — small label above title
 * @param {string} title
 * @param {string} subtitle
 * @param {'left'|'center'} align
 */
const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => (
  <div className={`sh sh--${align} ${className}`}>
    {eyebrow && <p className="sh__eyebrow">{eyebrow}</p>}
    <h1 className="sh__title">{title}</h1>
    {subtitle && <p className="sh__subtitle">{subtitle}</p>}
  </div>
);

export default SectionHeader;
