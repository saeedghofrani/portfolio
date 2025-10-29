import { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaStackOverflow,
  FaDev,
} from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { PiReadCvLogoFill } from "react-icons/pi";
import "./FindMe.css";

const FindMe: React.FC = () => {
    const handleDownload = () => {
    const filePath = "/assets/cv.pdf"; // Use the path to your PDF file in the assets folder
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'saeed-ghofrani-ivari.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={`findme-backdrop ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}></div>
      <div className="findme-container" ref={menuRef}>
        <button
          aria-label="Open social links"
          className={`findme-button ${isOpen ? 'open' : ''}`}
          onClick={toggleNavbar}
        >
          <IoShareSocial className={`findme-icon ${isOpen ? 'open' : ''}`} />
          <div className={`findme-menu ${isOpen ? 'open' : 'closed'}`}>
          <div className="findme-menu-items">
            <button
              onClick={handleDownload}
              className="findme-menu-item"
              title="Download CV"
            >
              <PiReadCvLogoFill className="findme-menu-item-icon" />
            </button>
            <a
              href="https://github.com/saeedghofrani"
              target="_blank"
              rel="noopener noreferrer"
              className="findme-menu-item github"
              title="GitHub"
            >
              <FaGithub className="findme-menu-item-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/saeed-ghofrani/"
              target="_blank"
              rel="noopener noreferrer"
              className="findme-menu-item linkedin"
              title="LinkedIn"
            >
              <FaLinkedin className="findme-menu-item-icon" />
            </a>
            <a
              href="https://t.me/SaeedGhofraniIvari"
              target="_blank"
              rel="noopener noreferrer"
              className="findme-menu-item telegram"
              title="Telegram"
            >
              <FaTelegramPlane className="findme-menu-item-icon" />
            </a>
            <a
              href="mailto:sa.ghofraniivari@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="findme-menu-item gmail"
              title="Gmail"
            >
              <BiLogoGmail className="findme-menu-item-icon" />
            </a>
            <a
              href="https://stackoverflow.com/users/23426660/saeed-ghofrani"
              target="_blank"
              rel="noopener noreferrer"
              className="findme-menu-item stackoverflow"
              title="Stack Overflow"
            >
              <FaStackOverflow className="findme-menu-item-icon" />
            </a>
            <a
              href="https://dev.to/saeed_ghofrani"
              target="_blank"
              rel="noopener noreferrer"
              className="findme-menu-item dev"
              title="Dev.to"
            >
              <FaDev className="findme-menu-item-icon" />
            </a>
          </div>
        </div>
      </button>
    </div>
    </>
  );
};

export default FindMe;