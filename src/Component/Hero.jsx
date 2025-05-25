import React from 'react';
import { FaFileAlt, FaCoffee } from 'react-icons/fa';

const HeroMinimal = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 grid grid-cols-12 p-8 font-sans">
      
      {/* Left Content */}
      <div className="col-span-12 md:col-span-9 flex flex-col justify-center space-y-8 max-w-4xl mx-auto md:mx-0">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Welcome,<br />
          <span className="text-6xl md:text-7xl text-blue-600">
            I’m Mihad<span className="ml-1 text-blue-400"></span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed">
          I am a dedicated Full Stack Developer with a strong passion for building efficient, scalable, and user-centric web applications. My expertise lies in creating seamless digital experiences that drive results and add value.
        </p>

        {/* Action Links */}
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="#"
            className="flex items-center gap-3 text-gray-900 font-medium hover:text-blue-600 transition-colors duration-300"
          >
            <FaFileAlt className="text-xl" />
            View My Resume<span className="text-blue-600 ml-1"></span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 text-gray-900 font-medium hover:text-blue-600 transition-colors duration-300"
          >
            <FaCoffee className="text-xl" />
            Let’s Connect
          </a>
        </div>

        {/* Notes */}
        <div className="text-sm text-gray-500 pt-8 space-y-2 max-w-md">
          <p>
            <span className="text-blue-600"></span> Available for freelance, internships, and collaborative projects.
          </p>
          <p>
            <span className="text-blue-600"></span> Interested in my portfolio? Feel free to ask.
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="hidden md:flex flex-col col-span-3 items-center justify-center gap-40 space-y-8 text-gray-400 text-sm tracking-widest">
        <a
          href="#"
          className="rotate-90 hover:text-blue-600 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          LINKEDIN
        </a>
        <a
          href="#"
          className="rotate-90 hover:text-blue-600 transition-colors duration-300"
          aria-label="Dribbble"
        >
          DRIBBBLE
        </a>
        <a
          href="#"
          className="rotate-90 hover:text-blue-600 transition-colors duration-300"
          aria-label="Twitter"
        >
          TWITTER
        </a>
      </div>
    </div>
  );
};

export default HeroMinimal;
