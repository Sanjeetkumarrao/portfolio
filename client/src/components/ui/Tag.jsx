import './Tag.css';

/** Small monospace pill — used for tech stack labels */
const Tag = ({ children, className = '' }) => (
  <span className={`tag ${className}`}>{children}</span>
);

export default Tag;
