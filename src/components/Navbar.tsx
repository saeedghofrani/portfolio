import { Link, useLocation } from "react-router-dom";
import { FaHome, FaTools, FaEnvelope, FaPenFancy, FaBriefcase } from "react-icons/fa";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar-container">
      <ul className="actions-bar">
        <li
          className={`action ${location.pathname === "/" ? 'selected' : ''}`}
        >
          <Link to="/" className="nav-link">
            <FaHome />
          </Link>
        </li>
        <li
          className={`action ${location.pathname === "/about" ? 'selected' : ''}`}
        >
          <Link to="/about" className="nav-link">
            <FaPenFancy />
          </Link>
        </li>
        <li
          className={`action ${location.pathname === "/skills" ? 'selected' : ''}`}
        >
          <Link to="/skills" className="nav-link">
            <FaTools />
          </Link>
        </li>
        <li
          className={`action ${location.pathname === "/experience" ? 'selected' : ''}`}
        >
          <Link to="/experience" className="nav-link">
            <FaBriefcase />
          </Link>
        </li>
        <li
          className={`action ${location.pathname === "/contact" ? 'selected' : ''}`}
        >
          <Link to="/contact" className="nav-link">
            <FaEnvelope />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;