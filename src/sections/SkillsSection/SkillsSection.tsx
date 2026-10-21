const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Node.js", icon: "🚀", years: 5, link: "https://nodejs.org" },
        { name: "NestJS", icon: "🏗️", years: 4, link: "https://nestjs.com" },
        { name: "TypeScript", icon: "📘", years: 4, link: "https://www.typescriptlang.org" },
        { name: "Express.js", icon: "⚡", years: 5, link: "https://expressjs.com" },
        { name: "RabbitMQ", icon: "🐰", years: 3, link: "https://www.rabbitmq.com" },
        { name: "Redis", icon: "💾", years: 4, link: "https://redis.io" },
        { name: "Kubernetes", icon: "☸️", years: 2, link: "https://kubernetes.io" },
        { name: "Docker", icon: "🐳", years: 4, link: "https://www.docker.com" },
        { name: "Nginx", icon: "🌐", years: 4, link: "https://www.nginx.com" },
        { name: "RESTful APIs", icon: "🔌", years: 5, link: "https://restfulapi.net" },
        { name: "GraphQL", icon: "📊", years: 3, link: "https://graphql.org" },
        { name: "Microservices", icon: "🔧", years: 4, link: "https://microservices.io" }
      ]
    },
    {
      title: "Databases & Storage",
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "PostgreSQL", icon: "🐘", years: 5, link: "https://www.postgresql.org" },
        { name: "MongoDB", icon: "🍃", years: 4, link: "https://www.mongodb.com" },
        { name: "Redis", icon: "💾", years: 4, link: "https://redis.io" },
        { name: "Neo4j", icon: "🔷", years: 2, link: "https://neo4j.com" },
        { name: "MySQL", icon: "🐬", years: 3, link: "https://www.mysql.com" },
        { name: "SQLite", icon: "🗄️", years: 3, link: "https://www.sqlite.org" },
        { name: "Prisma", icon: "🔧", years: 3, link: "https://www.prisma.io" },
        { name: "TypeORM", icon: "⚙️", years: 4, link: "https://typeorm.io" },
        { name: "Sequelize", icon: "🗃️", years: 3, link: "https://sequelize.org" },
        { name: "Raw SQL", icon: "📝", years: 5, link: "https://www.w3schools.com/sql" },
        { name: "Query Optimization", icon: "⚡", years: 5, link: "https://www.postgresql.org/docs/current/performance-tips.html" }
      ]
    },
    {
      title: "Cloud & DevOps",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "CI/CD", icon: "🔄", years: 3, link: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
        { name: "Docker", icon: "🐳", years: 4, link: "https://www.docker.com" },
        { name: "Kubernetes", icon: "☸️", years: 2, link: "https://kubernetes.io" },
        { name: "Nginx", icon: "🌐", years: 4, link: "https://www.nginx.com" },
        { name: "Firebase", icon: "🔥", years: 3, link: "https://firebase.google.com" },
        { name: "AWS", icon: "☁️", years: 2, link: "https://aws.amazon.com" },
        { name: "Google Cloud", icon: "☁️", years: 2, link: "https://cloud.google.com" }
      ]
    },
    {
      title: "Real-Time Systems",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "WebSockets", icon: "🔌", years: 4, link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket" },
        { name: "Socket.IO", icon: "💬", years: 4, link: "https://socket.io" },
        { name: "RabbitMQ", icon: "🐰", years: 3, link: "https://www.rabbitmq.com" },
        { name: "Firebase Realtime", icon: "🔥", years: 3, link: "https://firebase.google.com/docs/database" }
      ]
    },
    {
      title: "Frontend & Full-Stack",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Angular", icon: "🅰️", years: 3, link: "https://angular.io" },
        { name: "HTML", icon: "📄", years: 5, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", icon: "🎨", years: 5, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", icon: "📜", years: 5, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "React", icon: "⚛️", years: 2, link: "https://react.dev" }
      ]
    },
    {
      title: "Project Management",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Git", icon: "📦", years: 5, link: "https://git-scm.com" },
        { name: "GitHub", icon: "🐙", years: 5, link: "https://github.com" },
        { name: "Trello", icon: "📋", years: 3, link: "https://trello.com" },
        { name: "Agile/Scrum", icon: "🏃", years: 4, link: "https://www.scrum.org" },
        { name: "Communication", icon: "💬", years: 5, link: "#" }
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
                  <a
                    key={skillIndex}
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl p-4 transition-all duration-500 ease-out cursor-pointer block hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.3)]"
                  >
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-30 animate-pulse`}></div>
                    </div>

                    {/* Glowing shadow effect */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500 blur-xl -z-10`}></div>

                    <div className="relative z-10 text-center">
                      <div className="text-3xl mb-2 transform group-hover:scale-150 group-hover:rotate-12 transition-all duration-500 ease-out">{skill.icon}</div>
                      <div className="text-xs text-gray-300 font-semibold group-hover:text-white transition-colors duration-300 mb-1">{skill.name}</div>
                      <div className="text-xs font-bold mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                        {skill.years} years
                      </div>
                    </div>
                  </a>
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