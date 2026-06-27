import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navLinks, personal } from '../../data/personal.js';
import { Icons } from '../ui/Icons.jsx';
import './Navbar.css';

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close menu on route change / resize
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <>
      {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />}

      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
            <span className="navbar__logo-bracket">&lt;</span>
            {personal.initials}
            <span className="navbar__logo-bracket">/&gt;</span>
          </Link>

          {/* Desktop nav */}
          <nav className="navbar__links" aria-label="Main navigation">
            {navLinks.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                end={l.path === '/'}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Hire Me CTA */}
          <Link to="/contact" className="navbar__cta">
            Hire Me
          </Link>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? Icons.close : Icons.menu}
          </button>
        </div>

        {/* Mobile drawer */}
        <nav className={`navbar__drawer${menuOpen ? ' navbar__drawer--open' : ''}`}>
          {navLinks.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === '/'}
              className={({ isActive }) =>
                `navbar__drawer-link${isActive ? ' navbar__drawer-link--active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
