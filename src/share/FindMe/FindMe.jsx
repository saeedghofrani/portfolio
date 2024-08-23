import React, { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaStackOverflow,
  FaDev,
} from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { PiReadCvLogoFill } from "react-icons/pi";
import styles from "./FindMe.module.css";

const FindMe = () => {
    const handleDownload = () => {
    // Path to your PDF file
    const filePath = "/assets/saeed ghofrani ivari.pdf";
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'saeed-ghofrani-ivari.pdf'; // Optional: specify filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [isOpen, setIsOpen] = useState(true);
  const menuRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
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
    <div className={styles.findMeContainer} ref={menuRef}>
      <div
        className={`${styles.navbar} ${isOpen ? styles.open : ""}`}
        onClick={toggleNavbar}
      >
        {!isOpen && <IoShareSocial className={styles.circleIcon} />}
        {isOpen && (
          <div className={styles.navIconContainer}>
                       <a
            >
              <PiReadCvLogoFill className={styles.navIcon} onClick={handleDownload} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={styles.navIcon} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={styles.navIcon} />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane className={styles.navIcon} />
            </a>
            <a
              href="mailto:someone@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoGmail className={styles.navIcon} />
            </a>
            <a
              href="https://stackoverflow.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaStackOverflow className={styles.navIcon} />
            </a>
            <a
              href="https://dev.to"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDev className={styles.navIcon} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindMe;