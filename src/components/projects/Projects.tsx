import { FC } from "react";

const projectsData = [
  {
    title: "Lawyer Management System",
    description:
      "A full-stack application for managing client cases, appointments, and billing with authentication and user roles.",
    image: "https://placehold.co/400", // Replace with your image path
    technologies: ["Node.js", "Express", "MySQL", "React"],
    liveLink: "https://example.com",
    repoLink: "https://github.com/your-repo",
  },

  // Add more projects as needed
];

const Projects: FC = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">
        Projects done by Me.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-primary text-white text-sm py-1 px-3 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-content"
                >
                  Live Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
