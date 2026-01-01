import React from "react";
import { FaCode, FaServer, FaMobile, FaPaintBrush, FaDatabase, FaCogs, FaCloud, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    { icon: FaCode, title: "Frontend", color: "blue" },
    { icon: FaServer, title: "Backend", color: "green" },
    { icon: FaMobile, title: "Mobile", color: "purple" },
    { icon: FaPaintBrush, title: "UI/UX", color: "pink" },
    { icon: FaDatabase, title: "Database", color: "indigo" },
    { icon: FaCogs, title: "Full Stack", color: "orange" },
    { icon: FaCloud, title: "Deployment", color: "teal" },
    { icon: FaShieldAlt, title: "Security", color: "red" },
  ];

  const colorClasses = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
    pink: "bg-pink-50 text-pink-600",
    indigo: "bg-indigo-50 text-indigo-600",
    orange: "bg-orange-50 text-orange-600",
    teal: "bg-teal-50 text-teal-600",
    red: "bg-red-50 text-red-600",
  };

  return (
    <div className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">My Services</h3>
          <p className="text-gray-600">Complete full-stack development solutions</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`${colorClasses[service.color]} border border-gray-200 rounded-lg p-4 text-center`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -3 }}
            >
              <service.icon className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">{service.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;