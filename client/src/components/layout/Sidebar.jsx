import { socials } from '../../data/personal.js';
import { Icons } from '../ui/Icons.jsx';
import './Sidebar.css';

const Sidebar = () => (
  <aside className="sidebar" aria-label="Social links">
    <div className="sidebar__links">
      {socials.map((s) => (
        <a
          key={s.id}
          href={s.url}
          target="_blank"
          rel="noreferrer"
          className="sidebar__link"
          title={s.label}
          aria-label={s.label}
        >
          {Icons[s.icon]}
        </a>
      ))}
    </div>
    <div className="sidebar__line" />
  </aside>
);

export default Sidebar;
