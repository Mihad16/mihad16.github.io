import React from 'react'

const Services = () => (
    <section id="service" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p>Building responsive, fast, and user-friendly websites using React, Tailwind CSS, and more.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">Backend APIs</h3>
            <p>Creating scalable and secure RESTful APIs with Node.js, Express, Django, or Flask.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
            <p>Designing clean, intuitive interfaces that enhance user experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
  

export default  Services