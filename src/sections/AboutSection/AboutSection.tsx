const AboutSection: React.FC = () => {
  return (
    <section className="py-40 px-12 text-gray-100">
      <div className="max-w-full mx-auto text-center">
        <h1 className="page-title mb-24">About Me</h1>
        <div className="max-w-6xl mx-auto space-y-12">
          <p className="text-large leading-relaxed">
            I'm a <span className="text-highlight">Backend Engineer</span> with 5+ years of experience in developing scalable, high-performance web applications.
          </p>
          <p className="text-large leading-relaxed">
            I specialize in <span className="text-highlight">NestJS, PostgreSQL, MongoDB, and Redis</span>, building efficient microservices architecture solutions that power real-time applications.
          </p>
          <p className="text-large leading-relaxed">
            My passion lies in creating <span className="text-highlight">secure, scalable backend systems</span> that integrate seamlessly with third-party APIs, optimize database performance, and deploy flawlessly in containerized environments.
          </p>
          <p className="text-large leading-relaxed">
            I thrive on tackling complex technical challenges and delivering solutions that make a real impact. Always learning, always building.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
