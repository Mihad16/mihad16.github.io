import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center px-6 py-16"
    >
      <div className="w-full max-w-4xl bg-white/30 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl p-10 text-gray-900 text-center">
        
        <h2 className="text-4xl font-bold text-blue-800 mb-6">About Me</h2>

        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          I’m <span className="font-semibold text-blue-700">Mihad</span>, a passionate Full Stack Developer focused on building modern, responsive, and efficient web applications. My journey started with curiosity and has grown into a mission — to craft meaningful digital experiences that combine performance and design.
        </p>

        <p className="mt-6 text-lg text-gray-800">
          I work with tools like <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Python</strong>, and <strong>Django</strong>. I enjoy turning complex problems into clean and simple code.
        </p>

        <p className="mt-6 text-lg text-gray-800">
          I’m constantly learning, improving, and looking for new challenges. Outside of code, you might find me playing football, exploring creative projects, or collaborating with like-minded developers.
        </p>
      </div>
    </section>
  );
};

export default About;
