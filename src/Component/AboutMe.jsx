import React from "react";
import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaLinux,
  FaDatabase,
  FaServer,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython size={40} color="#3776AB" /> },
  { name: "Django", icon: <SiDjango size={40} color="#092E20" /> },
  { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38B2AC" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" /> },
  { name: "Git & GitHub", icon: <FaGitAlt size={40} color="#F05032" /> },
  { name: "Linux", icon: <FaLinux size={40} color="#FCC624" /> },
  { name: "Backend Development", icon: <FaServer size={40} color="#6C757D" /> },
  { name: "Database Management", icon: <FaDatabase size={40} color="#f29111" /> },
  { name: "JavaScript", icon: <FaJsSquare size={40} color="#F7DF1E" /> },
  { name: "HTML5", icon: <FaHtml5 size={40} color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" /> },
];

const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen bg-white text-gray-900 px-8 py-20 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Text */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center space-y-8 max-w-3xl mx-auto md:mx-0">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-600">About Me</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-xl text-gray-700">
            I'm a dedicated Full Stack Developer specializing in Python and Django,
            building robust backend systems and clean, interactive frontend applications.
          </p>
          <p className="text-md md:text-lg text-gray-600 max-w-xl">
            I am proficient in React for frontend, Tailwind CSS for styling, and have strong
            experience with PostgreSQL and Linux environments. I focus on writing efficient,
            maintainable code with a passion for continuous learning and problem-solving.
          </p>
        </div>

        {/* Right Skills Grid */}
        <div className="col-span-12 md:col-span-5">
          <div
            className="
              grid 
              grid-cols-3  /* ALWAYS 3 columns on all screen sizes (including mobile) */
              sm:grid-cols-3  /* still 3 columns on small screens (≥640px) */
              md:grid-cols-4  /* 4 columns on medium and up (≥768px) */
              gap-6
              text-center
            "
          >
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-2">{skill.icon}</div>
                <h3 className="text-sm font-semibold text-gray-800">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
