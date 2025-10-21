import { useState } from "react";
import { FaHome, FaTools, FaEnvelope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaPenFancy } from "react-icons/fa";
import { IoIosAlbums } from "react-icons/io";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>(location.pathname);

  const handleNavClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 z-50 md:relative md:w-auto md:bg-transparent md:p-0">
      <ul className="flex justify-around md:flex-col md:space-y-4">
        <li
          className={`relative flex items-center justify-center p-2 rounded-lg transition-colors duration-200
            ${activeLink === "/" ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          onClick={() => handleNavClick("/")}
        >
          <Link to="/" className="text-white text-2xl flex items-center">
            <FaHome />
            <span className="hidden md:block ml-2 text-lg">Home</span>
          </Link>
        </li>
        <li
          className={`relative flex items-center justify-center p-2 rounded-lg transition-colors duration-200
            ${activeLink === "/skills" ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          onClick={() => handleNavClick("/skills")}
        >
          <Link to="/skills" className="text-white text-2xl flex items-center">
            <FaTools />
            <span className="hidden md:block ml-2 text-lg">Skills</span>
          </Link>
        </li>
        <li
          className={`relative flex items-center justify-center p-2 rounded-lg transition-colors duration-200
            ${activeLink === "/contact" ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          onClick={() => handleNavClick("/contact")}
        >
          <Link to="/contact" className="text-white text-2xl flex items-center">
            <FaEnvelope />
            <span className="hidden md:block ml-2 text-lg">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
