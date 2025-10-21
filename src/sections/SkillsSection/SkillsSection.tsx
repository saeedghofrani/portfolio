import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faCode,
  faExpandArrowsAlt,
  faClock,
  faCubes,
  faFileAlt,
  faTasks,
  faTable,
  faCogs,
  faUsers,
  faSearch,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

interface SkillItem {
  icon: any; // FontAwesomeIcon type
  name: string;
}

interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Runtimes",
    skills: [
      { icon: faCode, name: "Node.js (TypeScript, Express, NestJS)" },
      { icon: faCode, name: "C# (ASP.NET Core)" },
      { icon: faCode, name: "Python (Familiar)" },
      { icon: faCode, name: "JavaScript" },
    ],
  },
  {
    category: "Databases & ORMs",
    skills: [
      { icon: faDatabase, name: "PostgreSQL" },
      { icon: faDatabase, name: "MongoDB" },
      { icon: faDatabase, name: "Redis" },
      { icon: faTable, name: "TypeORM, Prisma, Sequelize" },
      { icon: faDatabase, name: "MySQL" },
      { icon: faDatabase, name: "Neo4j (Familiar)" },
      { icon: faDatabase, name: "RabbitMQ" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { icon: faExpandArrowsAlt, name: "Docker" },
      { icon: faCubes, name: "Kubernetes (Familiar)" },
      { icon: faCogs, name: "Nginx" },
      { icon: faCogs, name: "CI/CD (GitLab CI, GitHub Actions)" },
    ],
  },
  {
    category: "Tools & Methodologies",
    skills: [
      { icon: faTasks, name: "Agile/Scrum" },
      { icon: faProjectDiagram, name: "Microservices Architecture" },
      { icon: faSearch, name: "Problem Solving & Debugging" },
      { icon: faUsers, name: "Team Collaboration" },
      { icon: faFileAlt, name: "Technical Documentation" },
      { icon: faTachometerAlt, name: "Performance Optimization" },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-blue-600 dark:text-blue-400">My Expertise</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">{category.category}</h2>
            <ul className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center text-lg text-gray-700 dark:text-gray-300">
                  <FontAwesomeIcon icon={skill.icon} className="mr-3 text-blue-500 dark:text-blue-300 text-xl" />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
