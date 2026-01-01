import React from "react";
import { FaHeart, FaCode } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left Side */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              &copy; {currentYear} Mihad Choudhury. All rights reserved.
            </p>
          </div>

          {/* Center - Made with love */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaHeart className="w-3 h-3 text-red-500" />
            <span>Built with passion</span>
            <FaCode className="w-3 h-3 text-blue-600 ml-2" />
          </div>

          {/* Right Side */}
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-500">
              Full Stack Developer • India • Available for projects
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;