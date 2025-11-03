const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Node.js", icon: "🚀" },
        { name: "NestJS", icon: "🏗️" },
        { name: "TypeScript", icon: "📘" },
        { name: "Express.js", icon: "⚡" },
        { name: "RabbitMQ", icon: "🐰" },
        { name: "Redis", icon: "💾" },
        { name: "Kubernetes", icon: "☸️" },
        { name: "Docker", icon: "🐳" },
        { name: "Nginx", icon: "🌐" },
        { name: "RESTful APIs", icon: "🔌" },
        { name: "GraphQL", icon: "📊" },
        { name: "Microservices", icon: "🔧" }
      ]
    },
    {
      title: "Databases & Storage",
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "💾" },
        { name: "Neo4j", icon: "🔷" },
        { name: "MySQL", icon: "🐬" },
        { name: "SQLite", icon: "🗄️" },
        { name: "Prisma", icon: "🔧" },
        { name: "TypeORM", icon: "⚙️" },
        { name: "Sequelize", icon: "🗃️" },
        { name: "Raw SQL", icon: "📝" },
        { name: "Query Optimization", icon: "⚡" }
      ]
    },
    {
      title: "Cloud & DevOps",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "CI/CD", icon: "🔄" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "☸️" },
        { name: "Nginx", icon: "🌐" },
        { name: "Firebase", icon: "🔥" },
        { name: "AWS", icon: "☁️" },
        { name: "Google Cloud", icon: "☁️" }
      ]
    },
    {
      title: "Real-Time Systems",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "WebSockets", icon: "🔌" },
        { name: "Socket.IO", icon: "💬" },
        { name: "RabbitMQ", icon: "🐰" },
        { name: "Firebase Realtime", icon: "🔥" }
      ]
    },
    {
      title: "Frontend & Full-Stack",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Angular", icon: "🅰️" },
        { name: "HTML", icon: "📄" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "📜" },
        { name: "React", icon: "⚛️" }
      ]
    },
    {
      title: "Project Management",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Git", icon: "📦" },
        { name: "GitHub", icon: "🐙" },
        { name: "Trello", icon: "📋" },
        { name: "Agile/Scrum", icon: "🏃" },
        { name: "Communication", icon: "💬" }
      ]
    }
  ];

  return (
    <section className="py-40 px-16 text-gray-100 relative overflow-hidden ">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="section-title mb-20 text-center">My Skills</h1>

        <div className="flex flex-wrap gap-8 justify-center ml-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex-1 min-w-[280px] max-w-[320px]" style={{ margin: '5px' }}>
              <h2 className="card-title mb-6 text-center">{category.title}</h2>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative overflow-hidden rounded-xl p-4 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative z-10 text-center">
                      <div className="text-2xl mb-1">{skill.icon}</div>
                      <div className="text-xs text-gray-300 font-medium">{skill.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;