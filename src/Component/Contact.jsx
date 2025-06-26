import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-fixed items-center justify-center px-6 py-16 bg-gradient-to-br from-blue-100 via-white to-blue-200"
    >
      <div className=" ">
        
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-800">Contact Me</h2>

        <div className="space-y-6 text-center text-lg">
          <p>📧 <strong>Email:</strong> mihadbornio@me.com</p>
          <p>📞 <strong>Phone:</strong> +91 9605111666</p>
          <p>📍 <strong>Location:</strong> Kasaragod, Kerala, India</p>
          <p>🌐 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aboobackermihad" className="text-blue-700 underline hover:text-blue-900">LinkedIn</a></p>
        </div>
        
  


        {/* Message Me Button */}
        <div className="text-center mt-10">
          <a
            href="mailto:mihadbornio@me.com"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
