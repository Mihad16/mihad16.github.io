import React from 'react';
import { FaFileAlt, FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.4, 0, 0.2, 1] 
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  const socialIconVariants = {
    hover: {
      y: -3,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section 
      ref={ref}
      id="home" 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 sm:px-6 py-16 md:py-20 lg:py-24 font-sans relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left column - Text content */}
          <motion.div className="space-y-6 md:space-y-8">
            <motion.div variants={itemVariants}>
              <motion.span 
                className="text-blue-400 font-mono text-sm sm:text-base mb-2 inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, my name is
              </motion.span>
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                variants={itemVariants}
              >
                Mihad.
              </motion.h1>
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mt-2 font-semibold"
                variants={itemVariants}
              >
                I build things for the web.
              </motion.h2>
            </motion.div>

            <motion.p 
              className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              I'm a <span className="text-blue-400 font-medium">Full Stack Developer</span> with 1.5+ years of experience in building exceptional digital experiences. Currently, I'm focused on creating accessible, human-centered products at the intersection of design and technology.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-2"
              variants={itemVariants}
            >
              <motion.a
                href="#about"
                className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span>View My Work</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="#contact"
                className="group flex items-center gap-2 border border-gray-700 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span>Get In Touch</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column - Visual element or illustration */}
          <motion.div 
            className="hidden lg:flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <img src="/src/assets/image1.jpeg" className="absolute inset-0 w-full h-full rounded-full object-cover" />
              <div className="absolute inset-4   shadow-2xl flex items-center justify-center">
               
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            delay: 1.5,
            duration: 0.5 
          } 
        }}
      >
        
      </motion.div>
    </section>
  );
};

export default Hero;

        