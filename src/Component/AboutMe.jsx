import React from "react";
import { FaGamepad, FaCode, FaBook, FaPython, FaJs, FaReact, FaDatabase, FaGitAlt, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaGraduationCap, FaBriefcase, FaTools, FaServer } from "react-icons/fa";
// Import from correct react-icons packages
import { SiTailwindcss, SiDjango, SiMysql, SiPostgresql, SiVite, SiFigma, SiPostman, SiWordpress } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di"; // VS Code from di package
import { DiLinux } from "react-icons/di"; // Linux from di package
import { SiHtml5 } from "react-icons/si"; // HTML5
import { SiCss3 } from "react-icons/si"; // CSS3
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { SiAdobephotoshop } from "react-icons/si";


const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      y: -3,
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  // Skill data organized by category
  const skills = {
    frontend: [
      { name: "HTML5", icon: SiHtml5, color: "bg-orange-100", textColor: "text-orange-700", iconColor: "text-orange-500" },
      { name: "CSS3", icon: SiCss3, color: "bg-blue-100", textColor: "text-blue-700", iconColor: "text-blue-500" },
      { name: "JavaScript", icon: FaJs, color: "bg-yellow-100", textColor: "text-yellow-700", iconColor: "text-yellow-500" },
      { name: "React", icon: FaReact, color: "bg-cyan-100", textColor: "text-cyan-700", iconColor: "text-cyan-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "bg-sky-100", textColor: "text-sky-700", iconColor: "text-sky-500" },
      { name: "Vite", icon: SiVite, color: "bg-purple-100", textColor: "text-purple-700", iconColor: "text-purple-500" },
    ],
    backend: [
      { name: "Python", icon: FaPython, color: "bg-blue-100", textColor: "text-blue-700", iconColor: "text-blue-500" },
      { name: "Django", icon: SiDjango, color: "bg-green-100", textColor: "text-green-700", iconColor: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "bg-blue-100", textColor: "text-blue-700", iconColor: "text-blue-600" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "bg-blue-100", textColor: "text-blue-700", iconColor: "text-blue-600" },
    ],
   tools: [
  { name: "Git", icon: FaGitAlt, color: "bg-orange-100", textColor: "text-orange-700", iconColor: "text-orange-500" },
  { name: "VS Code", icon: DiVisualstudio, color: "bg-blue-100", textColor: "text-blue-700", iconColor: "text-blue-500" },
  { name: "Figma", icon: SiFigma, color: "bg-pink-100", textColor: "text-pink-700", iconColor: "text-pink-500" },
  { name: "Postman", icon: SiPostman, color: "bg-orange-100", textColor: "text-orange-700", iconColor: "text-orange-500" },
  { name: "Linux", icon: DiLinux, color: "bg-yellow-100", textColor: "text-yellow-700", iconColor: "text-yellow-600" },
  { name: "WordPress", icon: SiWordpress, color: "bg-blue-100", textColor: "text-blue-700", iconColor: "text-blue-600" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "bg-blue-100", textColor: "text-blue-700", iconColor: "text-blue-500" },
]

  };

  return (
    <section ref={ref} id="about" className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            About <span className="text-blue-600">Me</span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Passionate Full Stack Developer with 1.5+ years of experience building modern web applications
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Left Column - Profile & Intro */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Profile Card */}
            <motion.div 
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-100">
                    <img 
                      src="/src/assets/image1.jpeg" 
                      alt="Mihad Choudhury"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
                    <FaCode className="w-5 h-5" />
                  </div>
                </div>

                {/* Intro Text */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Mihad Choudhury</h2>
                  <p className="text-blue-600 font-medium mb-4">Full Stack Developer</p>
                  <p className="text-gray-600 mb-4">
                    I specialize in building modern web applications with clean code and intuitive interfaces. 
                    My journey in web development has equipped me with a strong foundation in both frontend and 
                    backend technologies.
                  </p>
                  
                  {/* Quick Stats */}
                  <div className="flex flex-wrap gap-6 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">50+</div>
                      <div className="text-sm text-gray-500">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">1.5+</div>
                      <div className="text-sm text-gray-500">Years Experience</div>
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                      <FaGamepad className="w-4 h-4" />
                      Gaming
                    </span>
                    <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                      <FaCode className="w-4 h-4" />
                      Coding
                    </span>
                    <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                      <FaBook className="w-4 h-4" />
                      Learning
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div 
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <FaBriefcase className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
              </div>

              <div className="space-y-6">
                {/* Freelance */}
                <div className="relative pl-6 pb-6 border-l border-gray-200 last:pb-0">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Freelance Full-Stack Developer</h3>
                      <p className="text-gray-500 text-sm">Self-employed · Kasaragod, Kerala</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-blue-50 px-2 py-1 rounded">Jun 2024 – Present</span>
                  </div>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Built responsive web apps using React, Tailwind CSS, and Django</li>
                    <li>• Integrated MySQL/PostgreSQL databases</li>
                    <li>• Managed projects from planning to deployment</li>
                    <li>• Used Git/GitHub for version control</li>
                  </ul>
                </div>

                {/* Self Learning */}
                <div className="relative pl-6 pb-6 border-l border-gray-200 last:pb-0">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Self-Learning & Practice</h3>
                      <p className="text-gray-500 text-sm">Personal Development</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-blue-50 px-2 py-1 rounded">2023 – 2024</span>
                  </div>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Mastered full-stack development through projects</li>
                    <li>• Built personal portfolio and project showcase</li>
                    <li>• Strengthened problem-solving skills</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div 
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <FaGraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Education</h2>
              </div>

              <div className="space-y-6">
                {/* College */}
                <div className="relative pl-6 pb-6 border-l border-gray-200 last:pb-0">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Kuniya College of Management and Technology</h3>
                      <p className="text-gray-500 text-sm">BCA – Computer Science</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-blue-50 px-2 py-1 rounded">Jun 2025 – Present</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Tech Club Member – Focused on full stack development using React, Tailwind, Django, and MySQL
                  </p>
                </div>

                {/* Self Learning */}
                <div className="relative pl-6 border-l border-gray-200">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Self Learning</h3>
                      <p className="text-gray-500 text-sm">Full Stack Web Development</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-blue-50 px-2 py-1 rounded">2023 – 2024</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Learned full stack development through self-study and project-based learning
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills & Contact */}
          <div className="space-y-8">
            
            {/* Skills Section */}
            <motion.div 
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <FaTools className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Skills & Technologies</h2>
              </div>

              <div className="space-y-8">
                {/* Frontend Skills */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Frontend Development
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {skills.frontend.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className={`${skill.color} rounded-lg p-3 flex flex-col items-center justify-center transition-all duration-200`}
                        variants={skillItemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        transition={{ delay: index * 0.05 }}
                      >
                        <skill.icon className={`w-8 h-8 ${skill.iconColor} mb-2`} />
                        <span className={`text-xs font-medium ${skill.textColor}`}>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Backend Skills */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Backend Development
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {skills.backend.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className={`${skill.color} rounded-lg p-3 flex flex-col items-center justify-center transition-all duration-200`}
                        variants={skillItemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        transition={{ delay: index * 0.05 }}
                      >
                        <skill.icon className={`w-8 h-8 ${skill.iconColor} mb-2`} />
                        <span className={`text-xs font-medium ${skill.textColor}`}>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Development Tools
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {skills.tools.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className={`${skill.color} rounded-lg p-3 flex flex-col items-center justify-center transition-all duration-200`}
                        variants={skillItemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        transition={{ delay: index * 0.05 }}
                      >
                        <skill.icon className={`w-8 h-8 ${skill.iconColor} mb-2`} />
                        <span className={`text-xs font-medium ${skill.textColor}`}>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Portfolio Links */}
            <motion.div 
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              variants={cardVariants}
              whileHover="hover"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect</h2>
              <div className="grid grid-cols-2 gap-3">
                <motion.a
                  href="https://github.com/mihad16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors group"
                  whileHover={{ y: -2 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-3 group-hover:bg-gray-200 transition-colors">
                    <FaGithub className="w-6 h-6 text-gray-700" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/aboobackermihad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors group"
                  whileHover={{ y: -2 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
                    <FaLinkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/m6.lee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:border-pink-500 hover:bg-pink-50 transition-colors group"
                  whileHover={{ y: -2 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center mb-3 group-hover:bg-pink-200 transition-colors">
                    <FaInstagram className="w-6 h-6 text-pink-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Instagram</span>
                </motion.a>
                <motion.div
                  className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-colors group"
                  whileHover={{ y: -2 }}
                >
                  <Link to="/projects" className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-3 group-hover:bg-purple-200 transition-colors">
                      <FaCode className="w-6 h-6 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Projects</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact CTA */}
            
          </div>
        </motion.div>

        {/* Services Section - Added at the bottom */}
        <motion.div 
          className="mt-16 pt-16 border-t border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              My <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What I can build for you using my technical skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Service */}
            <motion.div 
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <FaCode className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Frontend Development</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Responsive, interactive user interfaces built with React, JavaScript, and modern CSS frameworks.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded">React</span>
                <span className="text-sm font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded">JavaScript</span>
                <span className="text-sm font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded">Tailwind CSS</span>
              </div>
            </motion.div>

            {/* Backend Service */}
            <motion.div 
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                  <FaServer className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Backend Development</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Server-side logic, APIs, and database solutions using Python/Django and SQL databases.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium bg-green-50 text-green-700 px-3 py-1 rounded">Django</span>
                <span className="text-sm font-medium bg-green-50 text-green-700 px-3 py-1 rounded">Python</span>
                <span className="text-sm font-medium bg-green-50 text-green-700 px-3 py-1 rounded">MySQL</span>
              </div>
            </motion.div>

            {/* Full Stack Service */}
            <motion.div 
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                  <FaTools className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Full Stack Solutions</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Complete web applications from frontend to backend, database design to deployment.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium bg-orange-50 text-orange-700 px-3 py-1 rounded">Full Stack</span>
                <span className="text-sm font-medium bg-orange-50 text-orange-700 px-3 py-1 rounded">Web Apps</span>
                <span className="text-sm font-medium bg-orange-50 text-orange-700 px-3 py-1 rounded">End-to-End</span>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;