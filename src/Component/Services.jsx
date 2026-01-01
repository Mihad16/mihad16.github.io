import React from "react";
import {
  FaCode,
  FaServer,
  FaPaintBrush,
  FaDatabase,
  FaCogs,
  FaGitAlt,
  FaUserGraduate,
  FaLightbulb,
  FaRocket,
  FaPython,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiVite,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiFigma,
  SiPostman,
  SiWordpress,
} from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";

import { DiVisualstudio, DiLinux } from "react-icons/di";


// 2️⃣ SMALL COMPONENTS (MOVE THESE UP)
const ServiceCard = ({ icon, title, text }) => (
  <div className="border rounded-xl p-6 text-center hover:shadow-lg transition">
    <div className="text-blue-600 text-3xl mb-3 mx-auto">{icon}</div>
    <h4 className="font-bold mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{text}</p>
  </div>
);

const SkillBox = ({ title, icon, list }) => (
  <div className="border rounded-xl p-5">
    <div className="flex items-center gap-3 mb-4">
      <div className="text-blue-600 text-xl">{icon}</div>
      <h4 className="font-bold">{title}</h4>
    </div>
    <div className="flex flex-wrap gap-2">
      {list.map((skill, i) => (
        <span
          key={i}
          className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded"
        >
          <skill.icon /> {skill.name}
        </span>
      ))}
    </div>
  </div>
);


// 3️⃣ DATA (skills, wordpressProjects)
const skills = {
  frontend: [
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "JavaScript", icon: FaJs },
    { name: "React", icon: FaReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Vite", icon: SiVite },
  ],
  backend: [
    { name: "Python", icon: FaPython },
    { name: "Django", icon: SiDjango },
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Photoshop", icon: SiAdobephotoshop },
,
  ],
tools: [
  { name: "Git", icon: FaGitAlt },
  { name: "VS Code", icon: DiVisualstudio },
  { name: "Figma", icon: SiFigma },
  { name: "Postman", icon: SiPostman },
  { name: "Linux", icon: DiLinux },
  { name: "WordPress", icon: SiWordpress },
  { name: "Photoshop", icon: SiAdobephotoshop },
],


};

const wordpressProjects = [
  {
    title: "WordPress E-commerce Website",
    description: "Online store with products, cart and checkout.",
    image: "/images/wp-ecommerce.jpg",
  },
  {
    title: "WordPress Business Website",
    description: "Professional business & service websites.",
    image: "/images/wp-business.jpg",
  },
  {
    title: "WordPress Portfolio Website",
    description: "Personal and creative portfolio websites.",
    image: "/images/wp-portfolio.jpg",
  },
  {
    title: "Landing Page / Poster Website",
    description: "Single-page landing & promotional websites.",
    image: "/images/wp-landing.jpg",
  },
];


// 4️⃣ MAIN COMPONENT (Services)
const Services = () => {
  return (
    <section id="services" className="py-16 bg-white px-4">
      {/* your existing JSX – NO CHANGES */}
    </section>
  );
};

export default Services;
