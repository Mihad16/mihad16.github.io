import React from "react";
import whatsappReview from "../assets/chat.jpg"; // WhatsApp review screenshot
import projectScreenshot from "../assets/styleslighting.png"; // Project screenshot

const projects = [
  {
    name: "StylesLighting.com",
    description: "A clean, responsive e-commerce website for a Dubai-based lighting brand.",
    reviewImage: whatsappReview,
    projectImage: projectScreenshot,
    link: "https://www.styleslighting.com",
  },
  // ✅ Add more projects later
];

const ProjectReviewGrid = () => {
  return (
    <section className="bg-gradient-to-br from-[#1f1f47] to-[#2e2e5e] py-16 px-6 text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">📂 Client Projects + Reviews</h2>

        {/* Grid container */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-5 shadow-lg flex flex-col"
            >
              {/* Project title */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                <p className="text-sm text-white/80">{project.description}</p>
              </div>

              {/* WhatsApp Review Screenshot */}
              <img
                src={project.reviewImage}
                alt="Client Review"
                className="rounded-lg border border-gray-300 shadow-sm mb-4 w-full  object-cover"
              />

              {/* Project Screenshot */}
              <img
                src={project.projectImage}
                alt="Project"
                className="rounded-lg border border-gray-300 shadow-sm mb-6 w-full h-48 object-cover"
              />

              {/* View button */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-center px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-600 hover:text-white transition"
              >
                🔗 View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectReviewGrid;
