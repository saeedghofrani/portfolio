import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-8 text-blue-600 dark:text-blue-400 leading-tight">
          Unlocking Potential with Robust Backend Solutions
        </h1>
        <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
          Hello! I'm Saeed Ghofrani, a dedicated Backend Engineer with over 3 years of experience in crafting scalable, efficient, and secure web applications. My journey in development is driven by a profound passion for problem-solving and an unwavering commitment to engineering excellence.
        </p>
        <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
          I specialize in Node.js, leveraging frameworks like NestJS and Express to build resilient APIs and microservices. My expertise spans across a diverse array of technologies including PostgreSQL, MongoDB, Redis, RabbitMQ, Docker, and Kubernetes, enabling me to design and implement comprehensive backend architectures that stand the test of time.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
          Beyond the code, I am a firm believer in collaborative environments, continuously seeking to learn and share knowledge. My goal is to contribute to innovative projects that make a tangible impact, always striving to deliver solutions that are not just functional, but also maintainable and forward-looking.
        </p>
      </div>
      <div className="mt-12 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">My Mission</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            To build elegant and performant backend systems that empower seamless user experiences and drive business growth.
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">My Values</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Integrity, continuous learning, innovation, and a collaborative spirit are the cornerstones of my professional approach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
