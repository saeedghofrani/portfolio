const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "License Market",
      period: "2023-2025",
      achievements: [
        "Developed high-performance NestJS backend with Prisma (data access) and Redis (caching) for the License Market Operator app",
        "Designed optimized PostgreSQL schemas and crafted complex raw SQL queries for robust data storage and insightful reporting",
        "Collaborated with UI/UX and frontend teams to develop a sophisticated ticketing and real-time chat system"
      ]
    },
    {
      role: "Backend Developer (Freelance)",
      company: "Self-employed",
      period: "2023-2025",
      achievements: [
        "Developed Mobasher, an integrated consulting platform using NestJS (backend), Angular (frontend), and TypeORM (persistence)",
        "Implemented microservices architecture with RabbitMQ, enabling real-time chat, VoIP calls, and video conferencing",
        "Optimized SQL stored procedures for enhanced performance",
        "Contributed to building a robust online learning platform"
      ]
    },
    {
      role: "Backend Developer",
      company: "ExModule",
      period: "2022-2023",
      achievements: [
        "Led backend development for a scalable cryptocurrency exchange, leveraging NestJS, PostgreSQL, MongoDB, Redis, Neo4j, and Elasticsearch",
        "Integrated the platform with Binance and deployed full nodes for major cryptocurrencies (BTC, TRX, BNB) to enhance liquidity and trading",
        "Contributed to a network marketing platform, developing complex user networking and accounting algorithms",
        "Built a secure KYC (Know Your Customer) system, ensuring compliance with international financial regulations"
      ]
    },
    {
      role: "Backend Developer Intern",
      company: "Borhan Sharif Company",
      period: "2021-2022",
      achievements: [
        "Developed and tested a web application for Darya Sharif using ASP.NET Core, Angular, Entity Framework, and MySQL",
        "Contributed to Symorgh ERP, an enterprise resource planning system",
        "Built and tested a client web application, collaborating closely with project teams"
      ]
    }
  ];

  return (
    <section className="py-40 px-16 text-gray-100 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="section-title mb-20 text-center">Work Experience</h1>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-3xl md:text-5xl font-bold text-white">{exp.role}</h3>
                <span className="text-2xl md:text-3xl text-highlight">{exp.company} | {exp.period}</span>
              </div>
              <ul className="space-y-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start text-medium">
                    <span className="text-highlight mr-3 mt-2">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;