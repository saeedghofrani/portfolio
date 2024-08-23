import React from "react";
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
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <article className={styles.iconSection}>
        <div class={styles.icnosSkill}>
          <FontAwesomeIcon icon={faCode} />
        </div>
        <div class={styles.icnosSkill}>
          <FontAwesomeIcon icon={faDatabase} />
        </div>
        <div class={styles.icnosSkill}>
          <FontAwesomeIcon icon={faChartLine} />
        </div>
        <div class={styles.icnosSkill}>
          <FontAwesomeIcon icon={faExpandArrowsAlt} />
        </div>
        <div class={styles.icnosSkill}>
          <FontAwesomeIcon icon={faClock} />
        </div>
        <div class={styles.icnosSkill}>
          <FontAwesomeIcon icon={faCubes} />
        </div>
        <div class={styles.icnosSkill}>
          <FontAwesomeIcon icon={faFileAlt} />
        </div>
        <div class={styles.icnosSkill}>
          <FontAwesomeIcon icon={faTasks} />
        </div>
        <div class={styles.icnosSkill}>
          <FontAwesomeIcon icon={faProjectDiagram} />
        </div>
      </article>
      <article>
        <div className={styles.skillCategory}>
          <h3>Full-Stack Proficiency</h3>
          <p>
            Adept in Node.js (NestJS, TypeScript, Express), familiar with
            frontend frameworks (Angular), familiar with C# Language (ASP.NET
            Core).
          </p>
        </div>

        <div className={styles.skillCategory}>
          <h3>Polyglot Persistence</h3>
          <p>
            Extensive experience with a diverse range of databases (PostgreSQL -
            proficient, MongoDB - proficient, Redis - proficient, RabbitMQ,
            Neo4j, MySQL, SQL, SQLite).
          </p>
        </div>

        <div className={styles.skillCategory}>
          <h3>Data Mastery</h3>
          <p>
            Skilled in ORMs (Prisma, TypeORM, Sequelize) and crafting complex
            raw SQL and PostgreSQL queries.
          </p>
        </div>

        <div className={styles.skillCategory}>
          <h3>Scalability Champion</h3>
          <p>
            Proficient in deployment with Docker, Kubernetes, and Nginx for
            high-performance backend systems and container orchestration.
          </p>
        </div>

        <div className={styles.skillCategory}>
          <h3>Real-Time Architect</h3>
          <p>
            Implemented real-time functionalities using socket-based
            applications and Firebase for seamless data synchronization.
          </p>
        </div>

        <div className={styles.skillCategory}>
          <h3>Microservices Mastermind</h3>
          <p>
            Designed and developed microservices and RESTful APIs for complex
            projects.
          </p>
        </div>

        <div className={styles.skillCategory}>
          <h3>Reporting Guru</h3>
          <p>
            Developed comprehensive reporting systems for network projects and
            cryptocurrency exchanges.
          </p>
        </div>

        <div className={styles.skillCategory}>
          <h3>Project Management Pro</h3>
          <p>
            Utilized Trello and GitHub effectively to manage tasks, milestones,
            and collaborate efficiently.
          </p>
        </div>

        <div className={styles.skillCategory}>
          <h3>CI/CD Automation Savvy</h3>
          <p>
            Familiar with CI/CD pipelines for streamlined development workflows.
          </p>
        </div>

        <div className={styles.skillCategory}>
          <h3>Thrive in Fast-Paced Environments</h3>
          <p>Ability to manage complex projects while meeting deadlines.</p>
        </div>

        <div className={styles.skillCategory}>
          <h3>Data-Driven Problem Solver</h3>
          <p>
            Identifying critical issues, resulting in cost savings (30%
            reduction).
          </p>
        </div>

        <div className={styles.skillCategory}>
          <h3>Collaborative & Communication Skills</h3>
          <p>
            Foster communication across teams for seamless user experiences.
            Excellent technical communication skills in English.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Skills;
