import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just alert, you can replace with API call later
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          noValidate
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-3 text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
