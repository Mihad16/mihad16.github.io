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
  { name: "Python", icon: <FaPython color="#3776AB" /> },            
  { name: "Django", icon: <SiDjango color="#092E20" /> },           
  { name: "React", icon: <FaReact color="#61DAFB" /> },             
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },   
  { name: "Git & GitHub", icon: <FaGitAlt color="#F05032" /> },     
  { name: "Linux", icon: <FaLinux color="#FCC624" /> },             
  { name: "Backend Development", icon: <FaServer color="#6C757D" /> }, 
  { name: "Database Management", icon: <FaDatabase color="#f29111" /> }, 
  { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },     
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },             
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },            
];

const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen bg-white text-gray-900 px-8 py-20 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Content: About Text */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center space-y-8 max-w-3xl mx-auto md:mx-0">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-600">
            About Me
          </h2>
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

        {/* Right Content: Skills Icons */}
        <div className="col-span-12 md:col-span-5 grid grid-cols-3 sm:grid-cols-3 gap-8 text-center max-w-md mx-auto md:mx-0">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center space-y-3 cursor-default">
              <div className="text-5xl hover:opacity-80 transition-opacity duration-300">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
