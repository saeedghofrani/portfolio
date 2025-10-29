const AboutSection: React.FC = () => {
  return (
    <section className="py-40 px-12 text-gray-100">
      <div className="max-w-full mx-auto text-center">
        <h1 className="text-8xl md:text-9xl font-bold mb-24 text-emerald-400">About Me</h1>
        <div className="max-w-6xl mx-auto space-y-12">
          <p className="text-4xl md:text-5xl leading-relaxed text-gray-300">
            I'm a <span className="text-emerald-400 font-semibold">Backend Engineer</span> with 5+ years of experience in developing scalable, high-performance web applications.
          </p>
          <p className="text-4xl md:text-5xl leading-relaxed text-gray-300">
            I specialize in <span className="text-emerald-400 font-semibold">NestJS, PostgreSQL, MongoDB, and Redis</span>, building efficient microservices architecture solutions that power real-time applications.
          </p>
          <p className="text-4xl md:text-5xl leading-relaxed text-gray-300">
            My passion lies in creating <span className="text-emerald-400 font-semibold">secure, scalable backend systems</span> that integrate seamlessly with third-party APIs, optimize database performance, and deploy flawlessly in containerized environments.
          </p>
          <p className="text-4xl md:text-5xl leading-relaxed text-gray-300">
            I thrive on tackling complex technical challenges and delivering solutions that make a real impact. Always learning, always building.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
