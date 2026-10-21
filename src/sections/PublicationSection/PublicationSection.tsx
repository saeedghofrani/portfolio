import React from 'react';

interface Publication {
  title: string;
  description: string;
  link: string;
  date: string;
}

const publications: Publication[] = [
  {
    title: "Building Scalable Microservices with NestJS and Kafka",
    description:
      "An in-depth article exploring best practices and patterns for developing resilient and scalable microservices using NestJS and Kafka event streaming.",
    link: "#", // Placeholder for a blog post or external article
    date: "October 2023",
  },
  {
    title: "Optimizing PostgreSQL Performance for High-Traffic Applications",
    description:
      "A guide to advanced PostgreSQL optimization techniques, covering indexing strategies, query tuning, and database scaling for demanding environments.",
    link: "#", // Placeholder
    date: "August 2023",
  },
  {
    title: "Securing Node.js Applications: A Comprehensive Guide",
    description:
      "This article delves into common security vulnerabilities in Node.js applications and provides practical solutions for building secure backend systems.",
    link: "#", // Placeholder
    date: "June 2023",
  },
];

const PublicationSection: React.FC = () => {
  return (
    <section id="publications" className="p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-blue-600 dark:text-blue-400">My Publications</h1>
      <div className="max-w-4xl mx-auto space-y-10">
        {publications.map((publication, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl font-bold mb-3 text-gray-800 dark:text-white">{publication.title}</h2>
            <p className="text-blue-600 dark:text-blue-400 text-md mb-3">{publication.date}</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{publication.description}</p>
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PublicationSection;
