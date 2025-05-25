import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Left: About Text */}
        <div className="md:col-span-7 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a passionate Full Stack Developer focused on crafting modern,
            responsive web applications. My approach blends clean code, thoughtful
            design, and a strong understanding of both frontend and backend technologies.
          </p>
          <p className="text-gray-600">
            With experience in JavaScript, React, Tailwind CSS, and Python,
            I enjoy building everything from landing pages to full web apps.
          </p>
        </div>

        {/* Right: Skills List */}
        <div className="md:col-span-5 flex flex-col justify-center space-y-3">
          <h3 className="text-xl font-semibold text-gray-800">Skills & Tools</h3>
          <ul className="grid grid-cols-2 gap-3 text-gray-700 text-sm">
            <li>✅ HTML5</li>
            <li>✅ CSS3</li>
            <li>✅ JavaScript</li>
            <li>✅ React</li>
            <li>✅ Tailwind CSS</li>
            <li>✅ Python</li>
            <li>✅ Git & GitHub</li>
            <li>✅ Responsive Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
