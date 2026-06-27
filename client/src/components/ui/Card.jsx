import './Card.css';

/**
 * Card
 * @param {boolean} hover   — enable hover lift effect
 * @param {boolean} padded  — add inner padding
 * @param {string}  accent  — left border accent ('accent'|'teal'|'none')
 */
const Card = ({
  children,
  hover = false,
  padded = true,
  accent = 'none',
  className = '',
  onClick,
  style,
}) => (
  <div
    className={[
      'card',
      hover   && 'card--hover',
      padded  && 'card--padded',
      accent !== 'none' && `card--accent-${accent}`,
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    onClick={onClick}
    style={style}
  >
    {children}
  </div>
);

export default Card;
