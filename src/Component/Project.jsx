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
import { DiVisualstudio, DiLinux } from "react-icons/di";


/* ================= SMALL COMPONENTS (FIXED POSITION) ================= */

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

/* ================= DATA ================= */

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
  ],
  tools: [
    { name: "Git", icon: FaGitAlt },
    { name: "VS Code", icon: DiVisualstudio },
    { name: "Figma", icon: SiFigma },
    { name: "Postman", icon: SiPostman },
    { name: "Linux", icon: DiLinux },
    { name: "WordPress", icon: SiWordpress },
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

/* ================= MAIN COMPONENT ================= */

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-blue-600">Skills</span> &{" "}
            <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            I’m a self-taught freelance developer building real-world web
            applications using modern technologies.
          </p>
        </div>

        {/* STORY */}
        <div className="bg-blue-50 border rounded-xl p-6 mb-12">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <FaUserGraduate className="text-blue-600 text-3xl mx-auto mb-2" />
              <h4 className="font-semibold">Self-Taught Developer</h4>
            </div>
            <div>
              <FaLightbulb className="text-green-600 text-3xl mx-auto mb-2" />
              <h4 className="font-semibold">Project Based Learning</h4>
            </div>
            <div>
              <FaRocket className="text-purple-600 text-3xl mx-auto mb-2" />
              <h4 className="font-semibold">Consistent Growth</h4>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <ServiceCard icon={<FaCode />} title="Frontend Development" text="Modern, responsive UI using React & Tailwind." />
          <ServiceCard icon={<FaServer />} title="Backend Development" text="Secure APIs and databases using Django." />
          <ServiceCard icon={<FaCogs />} title="Full Stack Projects" text="Complete web apps from idea to deployment." />
          <ServiceCard icon={<FaPaintBrush />} title="UI / UX Design" text="Clean designs and user-friendly layouts." />
          <ServiceCard icon={<FaDatabase />} title="Database Management" text="MySQL & PostgreSQL data handling." />
          <ServiceCard icon={<SiWordpress />} title="WordPress Development" text="Business, portfolio & e-commerce websites." />
        </div>

        {/* WORDPRESS TYPES */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            WordPress Website Types I Build
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wordpressProjects.map((item, index) => (
              <div key={index} className="bg-white border rounded-xl overflow-hidden shadow">
                <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SKILLS */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <SkillBox title="Frontend" icon={<FaCode />} list={skills.frontend} />
          <SkillBox title="Backend" icon={<FaServer />} list={skills.backend} />
          <SkillBox title="Tools" icon={<FaGitAlt />} list={skills.tools} />
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Let’s build something powerful and professional together.
          </p>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
            Start a Project
          </a>
        </div>
 <Services/>
      </div>
    </section>
  );
};

export default Services;
