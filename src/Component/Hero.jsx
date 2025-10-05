import React from 'react';
import { FaFileAlt, FaCoffee } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="min-h-screen bg-black bg-cover bg-center flex items-center justify-center px-6 py-12 font-sans">

      {/* Glass Blur Card */}
      <motion.div 
        className="w-full max-w-4xl backdrop-blur-md border border-gray-800 rounded-2xl px-8 py-14 space-y-10 text-white bg-gray-900/30"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Heading with Typewriter */}
        <motion.h1 
          className="text-2xl md:text-4xl font-extrabold leading-tight"
          variants={itemVariants}
        >
          Welcome,<br />
          <motion.span 
            className="text-blue-400 text-3xl md:text-5xl"
            variants={itemVariants}
          >
            I'm Mihad
          </motion.span><br />
          <motion.span 
            className="text-gray-300 text-2xl md:text-4xl"
            variants={itemVariants}
          >
            <Typewriter
              words={['Full Stack Developer']}
              loop={0}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.span>
        </motion.h1>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6"
          variants={itemVariants}
        >
          <motion.a
            href="#about"
            className="flex items-center gap-3 text-white font-medium hover:text-blue-400 transition duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaFileAlt className="text-xl" />
            View My Resume
          </motion.a>
          <motion.a
            href="#contact"
            className="flex items-center gap-3 text-white font-medium hover:text-blue-400 transition duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaCoffee className="text-xl" />
            Let's Connect
          </motion.a>
        </motion.div>

        {/* Extra Info */}
        <motion.div 
          className="text-sm text-gray-300 pt-6 space-y-2"
          variants={itemVariants}
        >
          <p>📬 Available for freelance, internships, and collaborative projects.</p>
          <p>💼 Interested in my portfolio? Feel free to ask.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
