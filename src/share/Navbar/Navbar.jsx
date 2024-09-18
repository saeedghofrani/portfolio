import React, { useState } from "react";
import { FaHome, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaPenFancy } from "react-icons/fa";
import { IoIosAlbums } from "react-icons/io";
import style from "./NavbarStyle.module.css";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa";
import CV from "../../assets/cv.pdf";
import { GrProjects } from "react-icons/gr";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleNavClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className={style.navbar}>
      <ul>
        <li
          className={activeLink === "/" ? style.active : ""}
          onClick={() => handleNavClick("/")}
        >
          <Link to="/" className={style.navIcon}>
            <FaHome />
            <span className={style.tooltip}>Home</span>
          </Link>
        </li>
        <li
          className={activeLink === "/projects" ? style.active : ""}
          onClick={() => handleNavClick("/projects")}
        >
          <Link to="/projects" className={style.navIcon}>
            <GrProjects />
            <span className={style.tooltip}>Projects</span>
          </Link>
        </li>
        <li
          className={activeLink === "/skills" ? style.active : ""}
          onClick={() => handleNavClick("/skills")}
        >
          <Link to="/skills" className={style.navIcon}>
            <FaTools />
            <span className={style.tooltip}>Skills</span>
          </Link>
        </li>
        <li
          className={activeLink === "/contact" ? style.active : ""}
          onClick={() => handleNavClick("/contact")}
        >
          <Link to="/contact" className={style.navIcon}>
            <FaEnvelope />
            <span className={style.tooltip}>Contact</span>
          </Link>
        </li>
        <li
          className={activeLink === "/publication" ? style.active : ""}
          onClick={() => handleNavClick("/publication")}
        >
          <Link to="/publication" className={style.navIcon}>
            <FaPenFancy />
            <span className={style.tooltip}>Publication</span>
          </Link>
        </li>
        <li
          className={activeLink === "/album" ? style.active : ""}
          onClick={() => handleNavClick("/album")}
        >
          <Link to="/album" className={style.navIcon}>
            <IoIosAlbums />
            <span className={style.tooltip}>Album</span>
          </Link>
        </li>
        <li
          className={activeLink === "/exprience" ? style.active : ""}
          onClick={() => handleNavClick("/exprience")}
        >
          <Link to="/exprience" className={style.navIcon}>
            <FaBriefcase />
            <span className={style.tooltip}>Exprience</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
