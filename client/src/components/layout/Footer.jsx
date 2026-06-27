import { Link } from 'react-router-dom';
import { personal, navLinks } from '../../data/personal.js';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      <div className="footer__top">
        <Link to="/" className="footer__logo">
          <span className="footer__logo-br">&lt;</span>
          {personal.initials}
          <span className="footer__logo-br">/&gt;</span>
        </Link>
        <p className="footer__tagline">Building the web, one commit at a time.</p>
      </div>

      <nav className="footer__nav" aria-label="Footer navigation">
        {navLinks.map((l) => (
          <Link key={l.path} to={l.path} className="footer__nav-link">
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <p>Designed &amp; built by <span className="gradient-text">{personal.name}</span></p>
      </div>
    </div>
  </footer>
);

export default Footer;
