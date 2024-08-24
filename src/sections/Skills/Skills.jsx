import React, { useState, useEffect, useRef } from "react";
import styles from "./SkillsStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faCode,
  faChartLine,
  faExpandArrowsAlt,
  faClock,
  faCubes,
  faFileAlt,
  faTasks,
  faTable,
  faProjectDiagram,
  faCogs,
  faChartBar,
  faUsers,
  faSearch,
  faTachometerAlt
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const iconSectionRef = useRef(null);

  const handleMouseEnter = (skill) => {
    if (!selectedSkill) {
      setHoveredSkill(skill);
    }
  };

  const handleMouseLeave = () => {
    if (!selectedSkill) {
      setHoveredSkill(null);
    }
  };

  const handleClick = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
    if (skill !== selectedSkill) {
      setHoveredSkill(null); // Reset hover state when selecting a skill
    }
  };

  const handleClickOutside = (event) => {
    if (iconSectionRef.current && !iconSectionRef.current.contains(event.target)) {
      setSelectedSkill(null);
      setHoveredSkill(null); // Reset hover state when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const skills = [
    {
      icon: faCode,
      name: "Full-Stack Proficiency",
      description: "Adept in Node.js (NestJS, TypeScript, Express), familiar with frontend frameworks (Angular), familiar with C# Language (ASP.NET Core).",
    },
    {
      icon: faDatabase,
      name: "Polyglot Persistence",
      description: "Extensive experience with a diverse range of databases (PostgreSQL - proficient, MongoDB - proficient, Redis - proficient, RabbitMQ, Neo4j, MySQL, SQL, SQLite).",
    },
    {
      icon: faTable,
      name: "Data Mastery",
      description: "Skilled in ORMs (Prisma, TypeORM, Sequelize) and crafting complex raw SQL and PostgreSQL queries.",
    },
    {
      icon: faExpandArrowsAlt,
      name: "Scalability Champion",
      description: "Proficient in deployment with Docker, Kubernetes, and Nginx for high-performance backend systems and container orchestration.",
    },
    {
      icon: faClock,
      name: "Real-Time Architect",
      description: "Implemented real-time functionalities using socket-based applications and Firebase for seamless data synchronization.",
    },
    {
      icon: faCubes,
      name: "Microservices Mastermind",
      description: "Designed and developed microservices and RESTful APIs for complex projects.",
    },
    {
      icon: faFileAlt,
      name: "Reporting Guru",
      description: "Developed comprehensive reporting systems for network projects and cryptocurrency exchanges.",
    },
    {
      icon: faTasks,
      name: "Project Management Pro",
      description: "Utilized Trello and GitHub effectively to manage tasks, milestones, and collaborate efficiently.",
    },
    {
      icon: faCogs,
      name: "CI/CD Automation Savvy",
      description: "Familiar with CI/CD pipelines for streamlined development workflows.",
    },
    {
      icon: faTachometerAlt,
      name: "Thrive in Fast-Paced Environments",
      description: "Ability to manage complex projects while meeting deadlines.",
    },
    {
      icon: faSearch,
      name: "Data-Driven Problem Solver",
      description: "Identifying critical issues, resulting in cost savings (30% reduction).",
    },
    {
      icon: faUsers,
      name: "Collaborative & Communication Skills",
      description: "Foster communication across teams for seamless user experiences. Excellent technical communication skills in English.",
    },
  ];

  return (
    <section className={styles.skillsSection}>
      <article className={styles.iconSection} ref={iconSectionRef}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={styles.icnosSkill}
            onMouseEnter={() => handleMouseEnter(skill.name)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(skill.name)}
            style={{
              opacity: selectedSkill && selectedSkill !== skill.name ? 0 : 1,
              filter: hoveredSkill && hoveredSkill !== skill.name ? "brightness(0.5)" : "brightness(1)",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={skill.icon} />
          </div>
        ))}
      </article>
      <article>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={styles.skillCategory}
            style={{
              display: selectedSkill && selectedSkill !== skill.name ? "none" : "block",
              opacity: hoveredSkill && hoveredSkill !== skill.name ? 0.3 : 1,
              filter: hoveredSkill && hoveredSkill !== skill.name ? "brightness(0.5)" : "brightness(1)",
            }}
          >
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Skills;
