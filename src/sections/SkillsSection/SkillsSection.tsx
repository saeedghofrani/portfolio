const SkillsSection: React.FC = () => {
  const skills = [
    "Node.js", "TypeScript", "NestJS", "Express", "PostgreSQL", "MongoDB",
    "Redis", "Docker", "RabbitMQ", "TypeORM", "Prisma", "MySQL"
  ];

  return (
    <section className="py-16 px-8 bg-white text-black">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">My Skills</h1>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded text-center">
              <span className="text-lg">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;