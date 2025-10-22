const ExperienceSection: React.FC = () => {
  return (
    <section className="py-16 px-8 bg-gray-100 text-black">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Experience & Education</h1>
      <div className="max-w-4xl mx-auto">

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded">
              <h3 className="text-xl font-bold">License Market - Backend Developer</h3>
              <p className="text-gray-600">2023 - Present</p>
              <p>Developed backend systems using NestJS, Prisma, Redis, and PostgreSQL.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h3 className="text-xl font-bold">Freelance - Backend Developer</h3>
              <p className="text-gray-600">2023 - 2025</p>
              <p>Built consulting platform with NestJS, Angular, TypeORM, and RabbitMQ.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h3 className="text-xl font-bold">Novintex - Backend Developer</h3>
              <p className="text-gray-600">2022 - 2023</p>
              <p>Developed cryptocurrency exchange platform with NestJS, MongoDB, PostgreSQL, Redis.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="bg-white p-4 rounded">
            <h3 className="text-xl font-bold">Payam-e Noor University</h3>
            <p className="text-gray-600">Computer Science - 2021 to Present</p>
            <p>Currently pursuing Bachelor's degree in Computer Science.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;