import React, { use } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 




function Hero() {
  const handleEmailClick = () => {
    window.location.href = "mailto:aboobackermihad@gmail.com";}
 
  return (
    <div className="sticky top-0 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
      
      {/* Left Section - Text */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-2xl text-center md:text-left relative z-10"
      >
        {/* Animated Heading */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#F8FAFC]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hi, I'm 
          <motion.span 
            className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent  ml-2"
     
          >
            Mihad
          </motion.span>
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p 
          className="text-[#E2E8F0] text-base sm:text-lg md:text-xl font-mono leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          I’m a <span className="font-bold text-[#FACC15]">Full Stack Developer</span> specializing in <span className="text-[#A5B4FC]">React</span> & <span className="text-[#FBBF24]">Django</span>. I love turning ideas into reality through clean, efficient, and scalable code.
        </motion.p>

        {/* Social Links - Centered on Small Screens */}
        <motion.div 
          className="flex items-center justify-center md:justify-start gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#F8FAFC] hover:text-[#FACC15] transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#F8FAFC] hover:text-[#0A66C2] transition-colors">
            <FaLinkedin />
          </a>
        </motion.div>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <motion.button 
            className="bg-[#FACC15] text-[#1E293B] px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#FBBF24] transition-transform transform hover:scale-105"
            onClick={handleEmailClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Contact Me
          </motion.button>
      
        </div>
      </motion.div>

      {/* Right Section - Profile Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-10 md:mt-0 md:ml-10"
      >
        <img 
          // Replace with your image URL
          alt="Profile"
          className="w-64 md:w-80 lg:w-96 rounded-full shadow-2xl border-4 border-[#FACC15]"
        />
      </motion.div>
    
    </div>
  );
}

export default Hero;
