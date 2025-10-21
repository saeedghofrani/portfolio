import React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveDemoLink: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "E-commerce Backend API",
    description:
      "A robust backend API for an e-commerce platform, handling product management, user authentication, orders, and payments.",
    image: "https://via.placeholder.com/400x250/0000FF/FFFFFF?text=E-commerce+API",
    githubLink: "#", // Placeholder
    liveDemoLink: "#", // Placeholder
    technologies: ["Node.js", "NestJS", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "Real-time Chat Application",
    description:
      "A scalable real-time chat application with user authentication, private messaging, and group chats.",
    image: "https://via.placeholder.com/400x250/FF0000/FFFFFF?text=Chat+App",
    githubLink: "#", // Placeholder
    liveDemoLink: "#", // Placeholder
    technologies: ["Node.js", "Express", "Socket.io", "MongoDB", "TypeScript"],
  },
  {
    title: "Cryptocurrency Exchange Backend",
    description:
      "Backend services for a cryptocurrency exchange platform, including order book management, wallet integration, and trade execution.",
    image: "https://via.placeholder.com/400x250/00FF00/FFFFFF?text=Crypto+Exchange",
    githubLink: "#", // Placeholder
    liveDemoLink: "#", // Placeholder
    technologies: ["Node.js", "NestJS", "Kafka", "PostgreSQL", "Redis", "Binance API"],
  },
  {
    title: "Consulting Platform API",
    description:
      "An integrated platform for consulting services, featuring user management, booking systems, and video conferencing integration.",
    image: "https://via.placeholder.com/400x250/FFFF00/000000?text=Consulting+Platform",
    githubLink: "#", // Placeholder
    liveDemoLink: "#", // Placeholder
    technologies: ["Node.js", "NestJS", "RabbitMQ", "TypeORM", "MySQL"],
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-white min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-blue-600 dark:text-blue-400">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300"
                >
                  GitHub
                </a>
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
