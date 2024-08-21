import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavbarStyle.module.css';

function Navbar() {
  return (
    <nav className={style.navbar}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;