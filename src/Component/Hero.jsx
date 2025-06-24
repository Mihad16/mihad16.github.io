import React from 'react';
import { FaFileAlt, FaCoffee } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 bg-cover bg-center flex items-center justify-center px-6 py-12 font-sans">

      {/* Glass Blur Card */}
      <div className="w-full max-w-4xl backdrop-blur-md border border-white/30 rounded-2xl px-8 py-14 space-y-10 text-gray-900">

        {/* Heading with Typewriter */}
        <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
          Welcome,<br />
          <span className="text-blue-700 text-3xl md:text-5xl">I’m Mihad</span><br />
          <span className="text-gray-700 text-2xl md:text-4xl">
            <Typewriter
              words={['Full Stack Developer']}
              loop={0}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="#"
            className="flex items-center gap-3 text-gray-900 font-medium hover:text-blue-700 transition duration-300"
          >
            <FaFileAlt className="text-xl" />
            View My Resume
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-gray-900 font-medium hover:text-blue-700 transition duration-300"
          >
            <FaCoffee className="text-xl" />
            Let’s Connect
          </a>
        </div>

        {/* Extra Info */}
        <div className="text-sm text-gray-700 pt-6 space-y-2">
          <p>📬 Available for freelance, internships, and collaborative projects.</p>
          <p>💼 Interested in my portfolio? Feel free to ask.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
