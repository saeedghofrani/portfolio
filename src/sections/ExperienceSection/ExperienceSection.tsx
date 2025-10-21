import React from "react";

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-white min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-blue-600 dark:text-blue-400">My Journey & Education</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Experience Section */}
        <div className="space-y-10">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">Experience</h2>

          {/* Job 1 */}
          <div className="relative border-l-4 border-blue-500 pl-8 py-4 group hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-xl">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800 group-hover:scale-125 transition-transform duration-300"></div>
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">License Market</h3>
            <p className="text-md font-medium text-gray-600 dark:text-gray-400 mb-2">Backend Developer | 2023 - PRESENT</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Developed a high-performance backend (NestJS) with Prisma and Redis for the License Market Operator app.</li>
              <li>Collaborated with UI/UX and frontend teams to integrate a sophisticated ticketing system.</li>
              <li>**Technologies:** NestJS, TypeScript, Prisma, Redis, PostgreSQL.</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="relative border-l-4 border-blue-500 pl-8 py-4 group hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-xl">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800 group-hover:scale-125 transition-transform duration-300"></div>
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">Freelance</h3>
            <p className="text-md font-medium text-gray-600 dark:text-gray-400 mb-2">Backend Developer | 2023 - 2025</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Developed an integrated consulting platform (Mobasher) using NestJS, Angular, and TypeORM.</li>
              <li>Implemented microservices with RabbitMQ, chat, VoIP calls, and video conferencing.</li>
              <li>Engineered complex stored procedures for optimal SQL performance.</li>
              <li>**Technologies:** NestJS, Angular, TypeORM, RabbitMQ, SQL.</li>
            </ul>
          </div>

          {/* Job 3 */}
          <div className="relative border-l-4 border-blue-500 pl-8 py-4 group hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-xl">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800 group-hover:scale-125 transition-transform duration-300"></div>
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">Novintex</h3>
            <p className="text-md font-medium text-gray-600 dark:text-gray-400 mb-2">Backend Developer | 2022 - 2023</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Led backend development of a scalable cryptocurrency exchange platform integrating with Binance (NestJS, MongoDB, PostgreSQL, Redis, Neo4j, Elasticsearch).</li>
              <li>Implemented KYC and comprehensive reporting features.</li>
              <li>Developed NFT marketplace integration with the crypto exchange.</li>
              <li>**Technologies:** NestJS, MongoDB, PostgreSQL, Redis, Neo4j, Elasticsearch, Binance API.</li>
            </ul>
          </div>

          {/* Job 4 */}
          <div className="relative border-l-4 border-blue-500 pl-8 py-4 group hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-xl">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800 group-hover:scale-125 transition-transform duration-300"></div>
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">Borhan Sharif Company</h3>
            <p className="text-md font-medium text-gray-600 dark:text-gray-400 mb-2">Backend Developer Intern | 2021 - 2022</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Developed and tested a web application for Darya Sharif using ASP.NET Core, Angular, Entity Framework, and MySQL.</li>
              <li>Contributed to Symorgh ERP development and testing team.</li>
              <li>**Technologies:** ASP.NET Core, Angular, Entity Framework, MySQL.</li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-10">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">Education</h2>

          {/* Education 1 */}
          <div className="relative border-l-4 border-blue-500 pl-8 py-4 group hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-xl">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800 group-hover:scale-125 transition-transform duration-300"></div>
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">Payam-e Noor University</h3>
            <p className="text-md font-medium text-gray-600 dark:text-gray-400">Computer Science | 2021 - present</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Currently pursuing a Bachelor's degree in Computer Science, focusing on advanced algorithms and software architecture.</p>
          </div>

          {/* Education 2 */}
          <div className="relative border-l-4 border-blue-500 pl-8 py-4 group hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-xl">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800 group-hover:scale-125 transition-transform duration-300"></div>
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">Shahid Beheshti High School</h3>
            <p className="text-md font-medium text-gray-600 dark:text-gray-400">Experimental Field | 2018 - 2021</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Completed high school education with a focus on experimental sciences, building a strong foundation in analytical thinking.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
