const AboutSection: React.FC = () => {
  return (
    <section className="py-16 px-8 text-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-emerald-400">About Me</h1>
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-emerald-500/30">
          <p className="text-lg mb-6 text-gray-300">
            Hello! I'm Saeed Ghofrani, a Senior Software Engineer & Team Lead with 5+ years of experience in building scalable backend systems and leading development teams.
          </p>
          <p className="text-lg mb-6 text-gray-300">
            I specialize in Node.js, NestJS, PostgreSQL, MongoDB, Redis, and microservices architecture. I excel at creating robust backend systems that can handle enterprise-level challenges and scale efficiently.
          </p>
          <p className="text-lg text-gray-300">
            I'm passionate about clean code, system architecture, team leadership, and continuous learning. Always ready to tackle complex technical challenges and mentor the next generation of developers!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
