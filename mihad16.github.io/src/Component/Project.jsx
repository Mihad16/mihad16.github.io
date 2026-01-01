import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaHome, FaExternalLinkAlt,  FaArrowUp  } from 'react-icons/fa';
import { Link } from "react-router-dom";

const projectlist = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark theme, and mobile-first design.",
    image: "/src/assets/chat.jpg",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.netlify.app",
    category: "Web Development"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with modern web technologies.",
    image: "/src/assets/phone.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://your-ecommerce.herokuapp.com",
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Chat Application",
    description: "Real-time chat application with room creation, file sharing, and emoji reactions. Features WebSocket communication and responsive design.",
    image: "/src/assets/styleslighting.png",
    technologies: ["React", "Socket.io", "Node.js", "Firebase"],
    github: "https://github.com/yourusername/chat-app",
    live: "https://your-chat-app.netlify.app",
    category: "Real-time App"
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A collaborative task management tool with drag-and-drop functionality, team collaboration features, and progress tracking.",
    image: "/src/assets/Untitled_logo_1_free-file.jpg",
    technologies: ["React", "TypeScript", "Redux", "Material-UI"],
    github: "https://github.com/yourusername/task-manager",
    live: "https://your-task-manager.vercel.app",
    category: "Productivity"
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Beautiful weather application with 7-day forecasts, location-based weather, and interactive maps. Built with modern APIs.",
    image: "/src/assets/chat.jpg",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://your-weather-app.netlify.app",
    category: "API Integration"
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "Content management system with markdown support, comment system, and SEO optimization. Built for content creators.",
    image: "/src/assets/phone.jpg",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
    github: "https://github.com/yourusername/blog-platform",
    live: "https://your-blog-platform.vercel.app",
    category: "CMS"
  }
];

function Project() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, 
            full-stack applications, and modern technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectlist.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg transition-colors duration-300 border border-gray-600/50 hover:border-gray-500/50"
                  >
                    <FaGithub className="text-lg" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600/80 hover:bg-blue-500/80 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
  className="flex justify-center gap-6 mt-16"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
>
  {/* Back to Home */}
  <Link
    to="/"
    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
  >
    <FaHome />
    Back to Home
  </Link>

  {/* Back to Top */}
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
  >
    <FaArrowUp />
    Back to Top
  </button>
</motion.div>
      </div>
    </section>
  );
}

export default Project;
