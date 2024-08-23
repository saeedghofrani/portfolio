import React from "react";
import styles from "./ResumeStyle.module.css";

const Resume = () => {
  return (
    <section className={styles.resumeContainer}>
      <header>
        <h1>Saeed Ghofrani Ivari</h1>
        <p className={styles.title}>Backend Developer</p>
      </header>
      <div className={styles.section}>
        <h2>Professional Experience</h2>
        <div className={styles.job}>
          <div className={styles.experienceHeader}>
            <h3>License Market</h3>
            <p>2023 - PRESENT</p>
          </div>
          <p className={styles.role}>
            What The Fuck Was I Doing: Backend Developer
          </p>
          <p className={styles.role}>
            What Was Going On: License Market Operator Web App
          </p>
          <p>
            What The Fuck Happened: Developed a high-performance backend
            (NestJS) with Prisma and Redis for the License Market Operator app.
            Collaborated with UI/UX and frontend teams to integrate a
            sophisticated ticketing system.
          </p>
        </div>

        <div className={styles.job}>
          <div className={styles.experienceHeader}>
            <h3>Freelance</h3>
            <p>2023 - 2025</p>
          </div>
          <p className={styles.role}>
            What The Fuck Was I Doing: Backend Developer
          </p>
          <p className={styles.role}>
            What Was Going On: Mobasher Consulting And Cooperative Services
          </p>
          <p className={styles.role}>What Was Going On: Snergy Online</p>
          <p>
            Developed an integrated consulting platform (Mobasher) using NestJS
            (backend), Angular (frontend), and TypeORM (persistence).
            Implemented microservices architecture using RabbitMQ, and amazing
            chat functionality, VoIP calls, and video conferencing. Engineered
            complex stored procedures for optimal performance (sql). Contributed
            to building a robust online learning platform.
          </p>
        </div>

        <div className={styles.job}>
          <div className={styles.experienceHeader}>
            <h3>Novintex</h3>
            <p>2022 - 2023</p>
          </div>
          <p className={styles.role}>
            What The Fuck Was I Doing: Backend Developer
          </p>
          <p className={styles.role}>
            What Was Going On: Novintex Cryptocurrency Exchange
          </p>
          <p className={styles.role}>
            What Was Going On: Iranrad Network Marketing
          </p>
          <p className={styles.role}>
            What Was Going On: Ideastdm NFT Marketplace
          </p>
          <p>
            Led backend development of a scalable cryptocurrency exchange
            platform (NestJS, MongoDB, PostgreSQL, Redis, Neo4j, Elasticsearch)
            integrating with Binance and establishing full nodes (BTC, TRX,
            BNB). Implemented KYC and comprehensive reporting. Contributed to
            building a robust network marketing platform, collaborating on
            architecture and complex user networking/accounting algorithms.
            Developed a seamless integration between the NFT marketplace and
            Novintex's crypto exchange, enhancing user experience.
          </p>
        </div>

        <div className={styles.job}>
          <div className={styles.experienceHeader}>
            <h3>Borhan Sharif Company            </h3>
            <p>2021 - 2022</p>
          </div>
          <p className={styles.role}>
            What The Fuck Was I Doing: Backend Developer Intern
          </p>
          <p className={styles.role}>
            What Was Going On: Design and development of Borhan Sharif web page
          </p>
          <p className={styles.role}>
            What Was Going On: Part of Symorgh ERP development and testing team
          </p>
          <p>
          Developed and tested a web application for Darya Sharif using ASP.NET Core, Angular, Entity Framework,
          and MySQL. This application contributes to Symorgh ERP, an enterprise resource planning system.
          </p>
        </div>

      </div>
      <div className={styles.section}>
        <h2>Education</h2>
        <div className={styles.education}>
          <p>
            <strong>Payam-e Noor University</strong> - Computer Science
          </p>
          <p className={styles.date}>2021 - present</p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
