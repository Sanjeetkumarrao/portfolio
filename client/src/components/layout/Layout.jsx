import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import useReveal from '../../hooks/useReveal.js';
import './Layout.css';

const Layout = () => {
  const { pathname } = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  // Re-run reveal observer on every route change
  useReveal();

  return (
    <div className="layout">
      <Navbar />
      <Sidebar />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
