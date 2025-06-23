import React from 'react';
import { FaFileAlt, FaCoffee } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen bg-white text-gray-900 grid grid-cols-12 px-6 py-12 font-sans">

      {/* Left Side */}
      <div className="col-span-12 md:col-span-9 flex flex-col justify-center space-y-8 max-w-4xl mx-auto md:mx-0">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Welcome,<br />
          <span className="text-blue-600 text-6xl md:text-7xl">I’m Mihad</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed">
          I am a dedicated Full Stack Developer with a strong passion for building efficient, scalable, and user-centric web applications. My expertise lies in creating seamless digital experiences that drive results and add value.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="#"
            className="flex items-center gap-3 text-gray-900 font-medium hover:text-blue-600 transition-colors duration-300"
          >
            <FaFileAlt className="text-xl" />
            View My Resume
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-gray-900 font-medium hover:text-blue-600 transition-colors duration-300"
          >
            <FaCoffee className="text-xl" />
            Let’s Connect
          </a>
        </div>

        {/* Extra Info */}
        <div className="text-sm text-gray-500 pt-8 space-y-2 max-w-md">
          <p>📬 Available for freelance, internships, and collaborative projects.</p>
          <p>💼 Interested in my portfolio? Feel free to ask.</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="hidden md:flex flex-col col-span-3 items-center justify-center space-y-16 text-gray-400 text-sm tracking-widest">
        <a
          href="#"
          className="rotate-90 hover:text-blue-600 transition-colors duration-300"
        >
          LINKEDIN
        </a>
        <a
          href="#"
          className="rotate-90 hover:text-blue-600 transition-colors duration-300"
        >
          DRIBBBLE
        </a>
        <a
          href="#"
          className="rotate-90 hover:text-blue-600 transition-colors duration-300"
        >
          TWITTER
        </a>
      </div>
    </section>
  );
};

export default Hero;
