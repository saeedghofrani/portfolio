const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Backend API",
      description: "Robust backend API for e-commerce platform with product management, authentication, and payments.",
      technologies: ["Node.js", "NestJS", "PostgreSQL", "Redis"]
    },
    {
      title: "Real-time Chat Application",
      description: "Scalable real-time chat with user authentication, private messaging, and group chats.",
      technologies: ["Node.js", "Express", "Socket.io", "MongoDB"]
    },
    {
      title: "Cryptocurrency Exchange Backend",
      description: "Backend services for crypto exchange with order book management and wallet integration.",
      technologies: ["Node.js", "NestJS", "PostgreSQL", "Redis", "Binance API"]
    }
  ];

  return (
    <section className="py-16 px-8 bg-white text-black">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">My Projects</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;