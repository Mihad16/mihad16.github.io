import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
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
      scale: 1.02,
      transition: { duration: 0.2 }
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
    <section
      ref={ref}
      id="contact"
      className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="max-w-4xl mx-auto w-full">
        
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-blue-400"
            variants={itemVariants}
          >
            Contact Me
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Ready to work together? Let's discuss your project and bring your ideas to life.
          </motion.p>
        </motion.div>

        <motion.div 
  className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
  variants={containerVariants}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
>
  {/* Contact Info */}
  <motion.div 
    className="bg-gray-900/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800"
    variants={cardVariants}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    whileHover="hover"
  >
    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-blue-400">Get In Touch</h3>
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
          <FaEnvelope className="text-blue-400 text-lg sm:text-xl" />
        </div>
        <div>
          <p className="text-sm sm:text-base text-gray-400">Email</p>
          <a href="mailto:mihad@example.com" className="text-white hover:text-blue-400 transition-colors text-sm sm:text-base">
       mihadbornio@me.com
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
          <FaPhone className="text-green-400 text-lg sm:text-xl" />
        </div>
        <div>
          <p className="text-sm sm:text-base text-gray-400">Phone</p>
          <a href="tel:+8801234567890" className="text-white hover:text-green-400 transition-colors text-sm sm:text-base">
            +91 9605111666
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
          <FaMapMarkerAlt className="text-purple-400 text-lg sm:text-xl" />
        </div>
        <div>
          <p className="text-sm sm:text-base text-gray-400">Location</p>
          <p className="text-white text-sm sm:text-base">India</p>
        </div>
      </div>
    </div>
  </motion.div>

  {/* Quick Actions */}
  <motion.div 
    className="bg-gray-900/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800 flex flex-col justify-center items-center"
    variants={cardVariants}
    whileHover="hover"
  >
    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-blue-400">Quick Actions</h3>
    <div className="space-y-3 w-full">
      <a
        href="mailto:mihadbornio@me.com"
        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg p-3 sm:p-4 text-white font-medium w-full"
      >
        <FaPaperPlane className="text-lg sm:text-xl" />
        <span className="text-sm sm:text-base">Send Email</span>
      </a>
      <a
        href="tel:+919605111666"
        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transition-colors rounded-lg p-3 sm:p-4 text-white font-medium w-full"
      >
        <FaPhone className="text-lg sm:text-xl" />
        <span className="text-sm sm:text-base">Call Now</span>
      </a>
    </div>
  </motion.div>
</motion.div>


        {/* Bottom Message */}
        <motion.div 
          className="text-center mt-8 sm:mt-12 lg:mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-sm sm:text-base text-gray-400">
            Available for freelance projects, collaborations, and new opportunities.
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Response time: Usually within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
