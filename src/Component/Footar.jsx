import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-fixed text-gray-700 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Name */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Mihad. All rights reserved.</p>

        {/* Links */}
        <div className="flex space-x-4 text-lg">
          <a
            href="https://github.com/Mihad16"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mihad16"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
