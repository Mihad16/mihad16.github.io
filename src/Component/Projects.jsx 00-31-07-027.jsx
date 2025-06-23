import React from "react";

const projectsData = [
  {
    title: "Project One",
    description: "Brief description about project one. It can be anything — website, app, script, or design.",
    tech: ["Tech1", "Tech2"],
    link: "#", // Replace with your project link or leave "#" if none
  },
  {
    title: "Project Two",
    description: "Short info about your second project. You can change this anytime.",
    tech: ["TechA", "TechB"],
    link: "#",
  },
  // Add more projects here anytime
];

const Projects = () => (
  <section id="projects" className="bg-gray-50 py-16 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 mb-10">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map(({ title, description, tech, link }, idx) => (
          <a
            href={link}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs font-medium bg-blue-100 text-blue-700 rounded px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
