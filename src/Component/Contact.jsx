import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#2563EB",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Get In <span className="text-blue-600">Touch</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            {/* Contact Card */}
            <motion.div 
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <FaEnvelope className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a 
                      href="mailto:mihadbornio@me.com"
                      className="text-lg text-gray-900 hover:text-blue-600 transition-colors font-medium"
                    >
                      mihadbornio@me.com
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Reply within 24 hours</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                    <FaPhone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <a 
                      href="tel:+919605111666"
                      className="text-lg text-gray-900 hover:text-green-600 transition-colors font-medium"
                    >
                      +91 96051 11666
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Available Mon-Fri, 9AM-6PM</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="text-lg text-gray-900 font-medium">India</p>
                    <p className="text-sm text-gray-400 mt-1">Open to remote opportunities</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Actions Card */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-8"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:mihadbornio@me.com"
                  className="group flex items-center justify-between gap-4 bg-white border border-gray-300 hover:border-blue-500 rounded-xl p-4 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <FaEnvelope className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Send Email</p>
                      <p className="text-sm text-gray-500">mihadbornio@me.com</p>
                    </div>
                  </div>
                  <FaArrowRight className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all" />
                </motion.a>

                <motion.a
                  href="tel:+919605111666"
                  className="group flex items-center justify-between gap-4 bg-white border border-gray-300 hover:border-green-500 rounded-xl p-4 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                      <FaPhone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Call Now</p>
                      <p className="text-sm text-gray-500">+91 96051 11666</p>
                    </div>
                  </div>
                  <FaArrowRight className="text-gray-400 group-hover:text-green-600 group-hover:translate-x-2 transition-all" />
                </motion.a>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div 
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Availability</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Available for freelance projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Open to full-time opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Ready for collaborations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Response time: Within 24 hours</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          className="text-center mt-12 pt-8 border-t border-gray-200"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-gray-600">
            Available for freelance projects, full-time positions, and collaborations
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Let's build something amazing together
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;