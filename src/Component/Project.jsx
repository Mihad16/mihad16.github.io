import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobileAlt, FaDesktop } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online store with shopping cart, user authentication, and payment integration.",
      image: "/api/placeholder/400/250",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com",
      icon: <FaServer className="w-5 h-5 text-blue-600" />
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features.",
      image: "/api/placeholder/400/250",
      tags: ["React", "Firebase", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com/yourusername/task-manager",
      live: "https://taskmanager-demo.com",
      icon: <FaDesktop className="w-5 h-5 text-green-600" />
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with location-based forecasts and interactive maps.",
      image: "/api/placeholder/400/250",
      tags: ["JavaScript", "API", "Chart.js"],
      category: "frontend",
      github: "https://github.com/yourusername/weather-app",
      live: "https://weather-dashboard.com",
      icon: <FaMobileAlt className="w-5 h-5 text-purple-600" />
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio website with smooth animations and modern design.",
      image: "/api/placeholder/400/250",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com",
      icon: <FaCode className="w-5 h-5 text-orange-600" />
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "Content management system for blogging with rich text editor and user comments.",
      image: "/api/placeholder/400/250",
      tags: ["Next.js", "PostgreSQL", "Prisma"],
      category: "fullstack",
      github: "https://github.com/yourusername/blog-platform",
      live: "https://blog-platform-demo.com",
      icon: <FaServer className="w-5 h-5 text-blue-600" />
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Mobile-first fitness tracking application with workout plans and progress charts.",
      image: "/api/placeholder/400/250",
      tags: ["React Native", "Redux", "Firebase"],
      category: "mobile",
      github: "https://github.com/yourusername/fitness-tracker",
      live: "https://fitness-tracker.com",
      icon: <FaMobileAlt className="w-5 h-5 text-teal-600" />
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section ref={ref} id="projects" className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            My <span className="text-blue-600">Projects</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
          >
            A collection of projects I've built to solve real-world problems and showcase my skills.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {["all", "frontend", "fullstack", "mobile"].map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
              variants={cardVariants}
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-50 to-gray-100 relative overflow-hidden">
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  {project.icon}
                  <span className="text-xs font-medium text-gray-700 bg-white/90 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaGithub />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          className="text-center mt-12 pt-8 border-t border-gray-200"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-gray-600">
            Interested in seeing more? Check out my GitHub for additional projects and contributions.
          </p>
          <motion.a
            href="https://github.com/mihad16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 bg-gray-900 hover:bg-black text-white font-medium py-2 px-6 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            <span>View GitHub Profile</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;