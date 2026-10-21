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
    <section className="py-16 px-8 text-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="section-title mb-12">My Projects</h1>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/30">
              <h3 className="card-title mb-3">{project.title}</h3>
              <p className="card-text mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded text-sm border border-emerald-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;