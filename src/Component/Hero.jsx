import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaCode, FaPaintBrush } from 'react-icons/fa';
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
        staggerChildren: 0.15,
        delayChildren: 0.2
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

  const floatAnimation = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  const socialVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section 
      ref={ref}
      id="home" 
      className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-16 md:py-20 font-sans relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full translate-y-48 -translate-x-48"></div>
      </div>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left column - Text content */}
          <motion.div className="space-y-6 md:space-y-8">
            <motion.div variants={itemVariants}>
              <motion.span 
                className="text-blue-600 font-medium text-sm sm:text-base mb-4 inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I'm
              </motion.span>
              
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                Mihad
                <span className="text-blue-600">.</span>
                <span className="block text-gray-700 text-3xl sm:text-4xl md:text-5xl mt-2">
                  Choudhury
                </span>
              </motion.h1>
              
              <motion.h2 
                className="text-xl sm:text-2xl text-gray-600 mt-6 font-semibold"
                variants={itemVariants}
              >
                Full Stack Developer & UI/UX Designer
              </motion.h2>
            </motion.div>

            <motion.p 
              className="text-gray-600 text-lg sm:text-xl max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              I specialize in building <span className="font-semibold text-gray-900">modern web applications</span> with clean code and intuitive interfaces. With 1.5+ years of experience, I focus on creating <span className="font-semibold text-gray-900">scalable solutions</span> that solve real-world problems.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap gap-8 pt-4"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <FaCode className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-500">Projects Completed</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <FaPaintBrush className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">1.5+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span>View My Work</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group flex items-center justify-center gap-3 bg-white border-2 border-gray-300 hover:border-blue-600 text-gray-800 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span>Contact Me</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-6 pt-8"
              variants={itemVariants}
            >
              <motion.a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                variants={socialVariants}
                whileHover="hover"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                variants={socialVariants}
                whileHover="hover"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:text-blue-400 hover:bg-blue-50 transition-colors"
                variants={socialVariants}
                whileHover="hover"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column - Profile image */}
          <motion.div 
            className="hidden lg:flex items-center justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="relative w-80 h-80"
              variants={floatAnimation}
              animate="float"
            >
              {/* Main profile image */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl transform -rotate-3"></div>
                
                <div className="relative w-full h-full overflow-hidden rounded-2xl border-4 border-white shadow-xl">
                  <img 
                    src="/src/assets/image1.jpeg" 
                    alt="Mihad Choudhury - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-white font-bold text-xs">React</span>
              </motion.div>

              <motion.div 
                className="absolute -bottom-6 -left-6 w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, 5, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <span className="text-white font-bold text-xs">Next.js</span>
              </motion.div>
            </motion.div>
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
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-500 text-sm font-medium">Scroll down</span>
          <div className="w-6 h-10 border border-gray-300 rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1.5 h-1.5 bg-blue-600 rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;