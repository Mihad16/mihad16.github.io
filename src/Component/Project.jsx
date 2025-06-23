import React from 'react';
import { motion } from 'framer-motion';



const projectlist = [
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio built with React & Tailwind CSS.",
    link: "https://your-portfolio.com",
  },
  {
    title: "E-Commerce App",
    description: "A modern e-commerce platform with Django and React.",
    link: "https://your-ecommerce.com",
  },
  {
    title: "Chat Application",
    description: "A real-time chat app built with WebSockets and Firebase.",
    link: "https://your-chatapp.com",
  },
];

function Project() {
    
   
   
  return (
    <>    
    <div className=" sticky top-0 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 md:px-12 py-20">
      
      {/* Title */}
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-12 text-[#F8FAFC]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>
      

      {/* Projects Grid */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projectlist.map((items, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-800 bg-opacity-50 text-white rounded-xl shadow-lg p-6 transition-transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white">{items.title}</h3>
            <p className="mt-2 text-white">{items.description}</p>
            <a 
              href={items.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 inline-block text-blue-600 font-bold hover:text-blue-800"
            >
              View Project →
            </a>
    
          </motion.div>
        ))}
      </div>
  
  
    </div>
   
    </>
  );
}

export default Project;
