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
  const [isOpen, setIsOpen] = useState<boolean>(true);
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
    <div className="fixed bottom-4 left-4 z-50" ref={menuRef}>
      <div
        className={`relative w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300
          ${isOpen ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'} cursor-pointer`}
        onClick={toggleNavbar}
      >
        {!isOpen && <IoShareSocial className="text-white text-2xl" />}
        {isOpen && (
          <div className="absolute bottom-0 left-full ml-4 flex flex-col items-start space-y-2">
            <a
              onClick={handleDownload}
              className="p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
              title="Download CV"
            >
              <PiReadCvLogoFill className="text-xl" />
            </a>
            <a
              href="https://github.com/saeedghofrani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition duration-300 flex items-center justify-center"
              title="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/saeed-ghofrani/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-700 text-white rounded-full shadow-md hover:bg-blue-800 transition duration-300 flex items-center justify-center"
              title="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://t.me/SaeedGhofraniIvari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-400 text-white rounded-full shadow-md hover:bg-blue-500 transition duration-300 flex items-center justify-center"
              title="Telegram"
            >
              <FaTelegramPlane className="text-xl" />
            </a>
            <a
              href="mailto:sa.ghofraniivari@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition duration-300 flex items-center justify-center"
              title="Gmail"
            >
              <BiLogoGmail className="text-xl" />
            </a>
            <a
              href="https://stackoverflow.com/users/23426660/saeed-ghofrani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition duration-300 flex items-center justify-center"
              title="Stack Overflow"
            >
              <FaStackOverflow className="text-xl" />
            </a>
            <a
              href="https://dev.to/saeed_ghofrani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 text-white rounded-full shadow-md hover:bg-gray-700 transition duration-300 flex items-center justify-center"
              title="Dev.to"
            >
              <FaDev className="text-xl" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindMe;