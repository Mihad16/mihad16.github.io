import React from "react";
import { FaGamepad, FaVideo, FaInstagram,   FaBook ,FaPhone, FaEnvelope, FaGlobe, FaReact, FaPython, FaJs, FaNode, FaGitAlt, FaGithub, FaLinkedin, FaTwitter, FaCode, FaDatabase, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";


const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section ref={ref} id="about" className="min-h-screen bg-black text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section with Profile and Introduction */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Profile Picture Section */}
          <motion.div 
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            variants={itemVariants}
          >
            <motion.div 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-56 xl:h-56 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl border-2 border-white/20 flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaCode className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-400" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Introduction Text */}
          <motion.div 
            className="flex flex-col justify-center order-1 lg:order-2 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6"
              variants={itemVariants}
            >
              My name is <motion.span 
                className="text-blue-400"
                animate={{ color: ["#60a5fa", "#3b82f6", "#2563eb", "#60a5fa"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Mihad
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300 mb-6 sm:mb-8"
              variants={itemVariants}
            >
Passionate Self-taught Full Stack Developer with 1.5 years of experience crafting clean, efficient, and user-friendly web applications.
            </motion.p>

            {/* Interests */}
            <motion.div 
              className="space-y-3 sm:space-y-4"
              variants={itemVariants}
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4">Interests</h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                <motion.div 
                  className="flex items-center bg-gray-800/50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 border border-gray-700 text-sm sm:text-base"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <FaGamepad className="text-blue-400 mr-2 text-sm sm:text-base" />
                  <span>Gaming</span>
                </motion.div>
                <motion.div 
                  className="flex items-center bg-gray-800/50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 border border-gray-700 text-sm sm:text-base"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                   <FaCode className="text-green-400 mr-2 text-sm sm:text-base" />
                   <span>Coding</span>
                </motion.div>
                <motion.div 
                  className="flex items-center bg-gray-800/50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 border border-gray-700 text-sm sm:text-base"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                    <FaBook className="text-yellow-400 mr-2 text-sm sm:text-base" />
                    <span>Learning</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            
            {/* Experience Section */}
            <div className="bg-gray-900/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-800">
  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-blue-400">
    Experience
  </h2>

  <div className="space-y-4 sm:space-y-6">
    {/* Freelance Experience */}
    <div className="border-l-2 border-blue-500 pl-3 sm:pl-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Freelance Full-Stack Developer</h3>
          <p className="text-gray-400 text-sm sm:text-base">Self-employed · Kasaragod, Kerala, India</p>
        </div>
        <span className="text-xs sm:text-sm text-gray-500">Jun 2024 – Present</span>
      </div>
      <ul className="text-gray-300 space-y-1 text-xs sm:text-sm">
        <li>• Built modern, responsive web apps using React, Tailwind CSS, and Framer Motion.</li>
        <li>• Practiced full-stack flow with Django backend and MySQL database integration.</li>
        <li>• Managed projects independently — from planning and coding to debugging and deployment.</li>
        <li>• Used Git and GitHub for version control and workflow management.</li>
        <li>• Focused on clean UI/UX and improving frontend performance.</li>
      </ul>
    </div>

    {/* Learning/Practice Section */}
    <div className="border-l-2 border-purple-500 pl-3 sm:pl-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Self-Learning & Practice Projects</h3>
          <p className="text-gray-400 text-sm sm:text-base">Personal Development</p>
        </div>
        <span className="text-xs sm:text-sm text-gray-500">2023 – 2024</span>
      </div>
      <ul className="text-gray-300 space-y-1 text-xs sm:text-sm">
        <li>• Completed multiple practice-based projects to master frontend and backend concepts.</li>
        <li>• Strengthened problem-solving and debugging skills through real-world simulations.</li>
        <li>• Built my personal developer portfolio and project showcase website.</li>
        <li>• Learned how to work like a professional developer — meeting goals and deadlines.</li>
      </ul>
    </div>
  </div>
</div>


            {/* Skills Section */}
            <div className="bg-gray-900/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-800">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-blue-400">Skills</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-white">Frontend Tools</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
        <div className="bg-orange-500 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">HTML</div>
        <div className="bg-blue-500 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">CSS</div>
        <div className="bg-yellow-500 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center">
          <FaJs className="mr-1 sm:mr-2 text-xs sm:text-sm" /> JavaScript
        </div>
        <div className="bg-blue-600 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center">
          <FaReact className="mr-1 sm:mr-2 text-xs sm:text-sm" /> React
        </div>
        <div className="bg-cyan-500 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">Tailwind CSS</div>
        <div className="bg-purple-600 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">Vite</div>
      </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-white">Backend Tools</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
        <div className="bg-blue-800 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center">
          <FaPython className="mr-1 sm:mr-2 text-xs sm:text-sm" /> Python
        </div>
        <div className="bg-orange-600 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">Django</div>
        <div className="bg-blue-900 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center">
          <FaDatabase className="mr-1 sm:mr-2 text-xs sm:text-sm" /> MySQL
        </div>
        <div className="bg-indigo-700 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">PostgreSQL</div>
      </div>
                </div>

                <div>
  <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-white">Development Tools</h3>
  <div className="flex flex-wrap gap-2 sm:gap-3">

    <div className="bg-orange-500 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center">
      <FaGitAlt className="mr-1 sm:mr-2 text-xs sm:text-sm" />
      Git
    </div>

    <div className="bg-gray-700 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">
      GitHub
    </div>

    <div className="bg-gray-800 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center">
      <FaServer className="mr-1 sm:mr-2 text-xs sm:text-sm" />
      Linux
    </div>

    <div className="bg-blue-700 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">
      VS Code
    </div>

    <div className="bg-pink-500 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">
      Figma
    </div>

    <div className="bg-yellow-600 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">
      Photoshop
    </div>

    <div className="bg-red-600 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">
      Postman
    </div>


    <div className="bg-purple-600 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">
      Vite
    </div>

  </div>
</div>

              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            
            {/* Education Section */}
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
  <h2 className="text-2xl font-bold mb-6 text-blue-400">Education</h2>

  <div className="space-y-4">
    {/* Bachelor Degree */}
    <div className="flex justify-between items-start">
  <div>
    <h3 className="text-lg font-semibold">Kuniya College of Management and Technology</h3>
    <p className="text-gray-400">BCA – Computer Science</p>
    <p className="text-sm text-gray-500">Kuniya,, Kasaragod, Kerala</p>
    <p className="text-xs text-gray-400 mt-1">
      Tech Club Member – Participated in coding challenges and workshops. 
      Focused on full stack development using React, Tailwind, Django, and MySQL.
    </p>
  </div>
  <span className="text-sm text-gray-500">Jun 2025 – Present</span>
</div>


    {/* Self Learning */}
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">Self Learning</h3>
        <p className="text-gray-400">Full Stack Web Development</p>
        <p className="text-sm text-gray-500">Online Courses & Personal Projects</p>
        <p className="text-xs text-gray-400 mt-1">
          Learned full stack development through self-study and project-based learning. Built responsive web apps using React, Tailwind CSS, Django, and PostgreSQL.
        </p>
      </div>
      <span className="text-sm text-gray-500">2023 – 2024</span>
    </div>

    {/* High School */}
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">Higher Secondary School</h3>
        <p className="text-gray-400">Science Stream</p>
        <p className="text-sm text-gray-500">AMBEDKAR VIDYANIKETHAN HSS PERIYA, Kerala, India</p>
      </div>
      <span className="text-sm text-gray-500">Completed – 2022</span>
    </div>
  </div>
</div>


            {/* Portfolio Section */}
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
  <h2 className="text-2xl font-bold mb-6 text-blue-400">Portfolio</h2>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

    {/* GitHub */}
    <a
      href="https://github.com/mihad16"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg p-4 text-center border border-gray-700"
    >
      <FaGithub className="text-2xl mx-auto mb-2 text-white" />
      <span className="text-sm text-white">GitHub</span>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/aboobackermihad/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg p-4 text-center"
    >
      <FaLinkedin className="text-2xl mx-auto mb-2 text-white" />
      <span className="text-sm text-white">LinkedIn</span>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/m6.lee?igsh=NjF3bHBycjA2Zjc5"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-pink-500 hover:bg-pink-600 transition-colors rounded-lg p-4 text-center"
    >
      <FaInstagram className="text-2xl mx-auto mb-2 text-white" />
      <span className="text-sm text-white">Instagram</span>
    </a>

    {/* Portfolio/Projects */}
    <Link
      to="/projects"
      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors rounded-lg p-4 text-center"
    >
      <FaCode className="text-2xl mx-auto mb-2 text-white" />
      <span className="text-sm text-white">Projects</span>
    </Link>

  </div>
</div>

            {/* Contact Details */}
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs font-bold">M</span>
                  </div>
                  <span className="text-gray-300">Mihad</span>
                </div>
                
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-400 mr-3" />
                  <span className="text-gray-300">mihadbornio@me.com</span>
                </div>
                
                <div className="flex items-center">
                  <FaPhone className="text-blue-400 mr-3" />
                  <span className="text-gray-300">+91 9605111666</span>
                </div>
                
                <div className="flex items-center">
                  <FaGlobe className="text-blue-400 mr-3" />
                  <span className="text-gray-300">india</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
