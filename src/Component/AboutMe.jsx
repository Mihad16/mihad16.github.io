import React from "react";
import { motion } from "framer-motion";

// Import only available and safe icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCode,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiVite,
  SiPostgresql,
  SiAdobephotoshop,
} from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-fixed bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center px-4 md:px-6 py-20 font-sans"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-5xl text-center text-gray-700"
      >
        {/* About Title */}
        <h2 className="text-4xl font-bold text-blue-800 mb-2">About Me</h2>
        <p className="text-base md:text-lg text-gray-600 mb-8">
          Studied Python at GTEC Kanhangad · Currently pursuing a degree
        </p>

        {/* Paragraphs */}
        <motion.p className="text-lg md:text-xl leading-relaxed">
          I’m <span className="font-semibold text-blue-700">Mihad</span>, a Full Stack Developer passionate about crafting modern, scalable, and user-focused web applications. What started as curiosity has turned into a mission to build impactful digital solutions.
        </motion.p>

        <motion.p className="mt-6 text-lg md:text-xl leading-relaxed">
          I began learning Python at GTEC Kanhangad and continued sharpening my skills through self-learning at home. I’ve worked with <strong>React</strong> and <strong>Django</strong> to build real-world projects and strengthen my problem-solving.
        </motion.p>

        <motion.p className="mt-6 text-lg md:text-xl leading-relaxed">
          I'm always exploring new technologies and ways to grow. Outside of coding, I enjoy football, creative projects, and collaborating with other passionate developers.
        </motion.p>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-blue-700 mb-8">My Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Frontend */}
            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-4">🖥️ Frontend</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center justify-center gap-3"><FaHtml5 className="text-orange-600" /> HTML</li>
                <li className="flex items-center justify-center gap-3"><FaCss3Alt className="text-blue-500" /> CSS</li>
                <li className="flex items-center justify-center gap-3"><FaJs className="text-yellow-400" /> JavaScript</li>
                <li className="flex items-center justify-center gap-3"><FaReact className="text-blue-400" /> React</li>
                <li className="flex items-center justify-center gap-3"><SiTailwindcss className="text-cyan-500" /> Tailwind CSS</li>
              </ul>
            </div>

            {/* Backend */}
            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-4">⚙️ Backend</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center justify-center gap-3"><FaPython className="text-yellow-500" /> Python</li>
                <li className="flex items-center justify-center gap-3"><SiDjango className="text-green-800" /> Django</li>
                <li className="flex items-center justify-center gap-3"><FaDatabase className="text-gray-600" /> MySQL</li>
                <li className="flex items-center justify-center gap-3"><SiPostgresql className="text-blue-700" /> PostgreSQL</li>
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-4">🧰 Tools</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center justify-center gap-3"><FaGitAlt className="text-orange-500" /> Git</li>
                <li className="flex items-center justify-center gap-3"><FaGithub className="text-black" /> GitHub</li>
                <li className="flex items-center justify-center gap-3"><FaCode className="text-blue-600" /> VS Code</li>
                <li className="flex items-center justify-center gap-3"><FaFigma className="text-pink-600" /> Figma</li>
                <li className="flex items-center justify-center gap-3"><SiVite className="text-purple-500" /> Vite</li>
                <li className="flex items-center justify-center gap-3"><SiAdobephotoshop className="text-blue-800" /> Photoshop</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
