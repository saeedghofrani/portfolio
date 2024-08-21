import React, { useState } from 'react';
import { FaHome, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import style from './NavbarStyle.module.css';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleNavClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.branding}>
        {/* <span className={style.initials}>SG</span> */}
        <span className={style.name}>Saeed Ghofrani</span>
      </div>
      <ul>
        <li
          className={activeLink === '/' ? style.active : ''}
          onClick={() => handleNavClick('/')}
        >
          <Link to="/" className={style.navIcon}>
            <FaHome />
            <span className={style.tooltip}>Home</span>
          </Link>
        </li>
        <li
          className={activeLink === '/projects' ? style.active : ''}
          onClick={() => handleNavClick('/projects')}
        >
          <Link to="/projects" className={style.navIcon}>
            <FaProjectDiagram />
            <span className={style.tooltip}>Projects</span>
          </Link>
        </li>
        <li
          className={activeLink === '/skills' ? style.active : ''}
          onClick={() => handleNavClick('/skills')}
        >
          <Link to="/skills" className={style.navIcon}>
            <FaTools />
            <span className={style.tooltip}>Skills</span>
          </Link>
        </li>
        <li
          className={activeLink === '/contact' ? style.active : ''}
          onClick={() => handleNavClick('/contact')}
        >
          <Link to="/contact" className={style.navIcon}>
            <FaEnvelope />
            <span className={style.tooltip}>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;